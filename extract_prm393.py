"""Extract PRM393 markdown exam files into questions-prm393.json."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "questions-prm393.json"
REPORT = ROOT / "extraction-report-prm393.md"

SOURCES = [
    ("PRM393_SP26_FE.md", "SP26 - FE"),
    ("PRM393_SP26_B5_FE.md", "SP26 - B5 - FE"),
    ("PRM393_SU26_FE.md", "SU26 - FE"),
    ("PRM393_SU26_FE_RE.md", "SU26 - FE - RE"),
    ("PRM393_SU26_B5_FE.md", "SU26 - B5 - FE"),
]

HEADING_RE = re.compile(r"^###\s*\**\s*Câu\s+(\d+)\s*\**", re.IGNORECASE)
QUESTION_RE = re.compile(r"^\**Câu hỏi:?\**\s*:?\s*(.*)$", re.IGNORECASE)
OPTION_RE = re.compile(r"^\s*[-*]\s+([A-H])[.)]\s*(.*)$")
ANSWER_RE = re.compile(r"^\s*[-*]\s+\*\*Đáp án:?\*\*\s*:?\s*(.*)$", re.IGNORECASE)
EXPLAIN_RE = re.compile(r"^\s*[-*]\s+\*\*Giải thích:?\*\*\s*:?\s*(.*)$", re.IGNORECASE)
TOPIC_RE = re.compile(r"^\s*[-*]\s+\*\*Kiến thức thuộc về:?\*\*\s*:?\s*(.*)$", re.IGNORECASE)


def clean(text: str) -> str:
    return re.sub(r"\*\*(.+?)\*\*", r"\1", text).strip()


def parse_file(path: Path):
    blocks, current = [], None
    for line in path.read_text(encoding="utf-8").splitlines():
        m = HEADING_RE.match(line.strip())
        if m:
            current = {"num": int(m.group(1)), "lines": []}
            blocks.append(current)
        elif current is not None:
            current["lines"].append(line)

    questions, issues = [], []
    for block in blocks:
        q_text, options, answer_raw, explanation, topic = [], [], "", [], ""
        section = None
        for raw in block["lines"]:
            line = raw.rstrip()
            s = line.strip()
            if not s or s == "---":
                continue
            if (m := QUESTION_RE.match(s)) and section is None:
                section = "q"; q_text.append(m.group(1)); continue
            if (m := OPTION_RE.match(line)) and section in ("q", "opt"):
                section = "opt"; options.append(clean(m.group(2))); continue
            if m := ANSWER_RE.match(line):
                section = "ans"; answer_raw = m.group(1); continue
            if m := EXPLAIN_RE.match(line):
                section = "exp"; explanation.append(m.group(1)); continue
            if m := TOPIC_RE.match(line):
                section = "topic"; topic = clean(m.group(1)); continue
            if section == "q":
                q_text.append(s)
            elif section == "opt" and options:
                options[-1] += " " + clean(s)
            elif section == "exp":
                explanation.append(s)

        letters = re.findall(r"(?:^|[\s,*/&])([A-H])\.", clean(answer_raw))
        indexes = sorted({ord(l) - 65 for l in letters if ord(l) - 65 < len(options)})
        if not options:
            issues.append(f"Câu {block['num']}: không có lựa chọn")
        if not indexes:
            issues.append(f"Câu {block['num']}: không nhận diện được đáp án ({answer_raw!r})")
        exp_text = clean(" ".join(explanation))
        if topic:
            exp_text = f"{exp_text}\nKiến thức: {topic}" if exp_text else f"Kiến thức: {topic}"
        questions.append({
            "sourceNumber": block["num"],
            "question": clean("\n".join(q_text)),
            "options": options,
            "correctAnswer": indexes[0] if len(indexes) == 1 else None,
            "correctAnswers": indexes if len(indexes) > 1 else None,
            "explanation": exp_text or None,
            "needsReview": not indexes,
        })
    return questions, issues


def main():
    exams, report, next_id = [], ["# Báo cáo trích xuất PRM393", ""], 1
    for exam_id, (file_name, title) in enumerate(SOURCES, start=1):
        questions, issues = parse_file(ROOT / file_name)
        for q in questions:
            q["id"] = next_id
            next_id += 1
        ordered = [{"id": q.pop("id"), **q} for q in questions]
        for q in ordered:
            q.pop("sourceNumber", None)
        exams.append({"id": exam_id, "title": title, "questions": ordered})
        multi = sum(1 for q in ordered if q["correctAnswers"])
        report.append(f"- `{file_name}` → Đề {exam_id} ({title}): **{len(ordered)}** câu, nhiều đáp án: {multi}, lỗi: {len(issues)}")
        report.extend(f"  - {i}" for i in issues)

    data = {"course": {"id": "prm393", "title": "PRM393"}, "exams": exams}
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    report.append("")
    report.append(f"Tổng: **{next_id - 1}** câu trong **{len(exams)}** đề.")
    REPORT.write_text("\n".join(report) + "\n", encoding="utf-8")
    print("\n".join(report))


if __name__ == "__main__":
    main()
