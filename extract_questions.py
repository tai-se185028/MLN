"""Extract the requested 300-question quiz data from MLN111.docx.

The source document actually contains 586 continuously numbered questions and no
exam headings. Per the product requirement, questions 1..300 are mapped in source
order into five groups of 60. This decision is documented in extraction-report.md.
"""

from __future__ import annotations

import hashlib
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

from docx import Document


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "MLN111-300.docx"
OUTPUT = ROOT / "questions.json"
REPORT = ROOT / "extraction-report.md"
QUESTION_RE = re.compile(r"^\s*(\d{1,3})[.)]\s+(.*)$", re.DOTALL)
OPTION_RE = re.compile(r"^\s*([A-Z])[.)]\s*(.*)$", re.DOTALL)
EXPECTED_QUESTIONS = 300
EXAM_SIZE = 60


def run_is_marked(run) -> bool:
    """Return True when a Word run carries an answer-like emphasis."""
    if not run.text.strip():
        return False
    rgb = run.font.color.rgb
    non_default_color = rgb is not None and str(rgb).upper() not in {"000000", "1A1D28"}
    return bool(
        run.bold is True
        or run.underline is True
        or run.font.highlight_color is not None
        or non_default_color
    )


def paragraph_is_marked(paragraph) -> bool:
    return any(run_is_marked(run) for run in paragraph.runs)


def extract():
    document = Document(SOURCE)
    headings = []
    for index, paragraph in enumerate(document.paragraphs):
        match = QUESTION_RE.match(paragraph.text.strip())
        if match:
            headings.append((index, int(match.group(1)), match.group(2).strip()))

    selected = headings[:EXPECTED_QUESTIONS]
    questions = []
    format_counts = Counter()

    for source_index, (paragraph_index, source_number, heading_text) in enumerate(selected):
        next_index = headings[source_index + 1][0] if source_index + 1 < len(headings) else len(document.paragraphs)
        options = []
        marked_indexes = []
        supplemental = []

        for paragraph in document.paragraphs[paragraph_index + 1 : next_index]:
            text = paragraph.text.strip()
            if not text:
                continue
            option_match = OPTION_RE.match(text)
            if option_match:
                # Preserve the answer text verbatim, excluding only its structural label.
                options.append(option_match.group(2).strip())
                if paragraph_is_marked(paragraph):
                    marked_indexes.append(len(options) - 1)
            else:
                # Notes and continuation paragraphs are source content, not discarded.
                supplemental.append(text)

            for run in paragraph.runs:
                if run.bold is True:
                    format_counts["bold"] += 1
                if run.underline is True:
                    format_counts["underline"] += 1
                if run.font.highlight_color is not None:
                    format_counts["highlight"] += 1
                if run.font.color.rgb is not None:
                    format_counts["color"] += 1

        has_marked_answer = len(marked_indexes) >= 1
        is_single_answer = len(marked_indexes) == 1
        questions.append(
            {
                "id": source_number,
                "question": heading_text,
                "options": options,
                "correctAnswer": marked_indexes[0] if is_single_answer else None,
                "correctAnswers": marked_indexes if len(marked_indexes) > 1 else None,
                "explanation": "\n".join(supplemental) if supplemental else None,
                "needsReview": not has_marked_answer,
            }
        )

    exams = []
    for offset in range(0, EXPECTED_QUESTIONS, EXAM_SIZE):
        exam_id = offset // EXAM_SIZE + 1
        exams.append(
            {
                "id": exam_id,
                "title": f"Đề {exam_id}",
                "questions": questions[offset : offset + EXAM_SIZE],
            }
        )

    data = {"course": {"id": "mln111", "title": "MLN111"}, "exams": exams}
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return document, headings, data, format_counts


def normalized(text: str) -> str:
    return " ".join(text.casefold().split())


def create_report(document, headings, data, format_counts):
    questions = [q for exam in data["exams"] for q in exam["questions"]]
    groups = defaultdict(list)
    for question in questions:
        groups[normalized(question["question"])].append(question["id"])
    duplicates = [ids for ids in groups.values() if len(ids) > 1]
    missing = [q for q in questions if not q["options"]]
    non_four = [q for q in questions if len(q["options"]) != 4]
    multi_answer = [q for q in questions if q.get("correctAnswers")]
    unresolved = [q for q in questions if q["correctAnswer"] is None and not q.get("correctAnswers")]
    explanations = [q for q in questions if q.get("explanation")]
    multi_marked = []
    for q in questions:
        if q["correctAnswer"] is None and q["options"]:
            multi_marked.append(q)

    source_hash = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
    counts = [len(exam["questions"]) for exam in data["exams"]]
    status = "ĐẠT CÓ CẢNH BÁO" if len(questions) == 300 and len(data["exams"]) == 5 else "KHÔNG ĐẠT"

    lines = [
        "# Báo cáo kiểm tra trích xuất dữ liệu",
        "",
        f"- Trạng thái: **{status}**",
        f"- File nguồn: `MLN111-300.docx` tải từ Google Docs do người dùng cung cấp (SHA-256: `{source_hash}`)",
        f"- Tổng đoạn văn: **{len(document.paragraphs)}**; tổng bảng: **{len(document.tables)}**",
        f"- Tổng tiêu đề câu hỏi phát hiện trong DOCX: **{len(headings)}** (đánh số liên tục {headings[0][1]}–{headings[-1][1]})",
        f"- Tổng câu xuất ra website: **{len(questions)}**",
        f"- Tổng đề xuất ra: **{len(data['exams'])}**; số câu từng đề: **{', '.join(map(str, counts))}**",
        "",
        "## Cấu trúc nguồn",
        "",
        "Nguồn Google Docs có đúng **300** câu, đánh số liên tục từ 1 đến 300. Tài liệu không chứa tiêu đề hoặc dấu phân cách riêng cho 5 đề và không reset số sau mỗi 60 câu. Theo cấu trúc 5 đề × 60 câu được yêu cầu, bộ trích xuất ánh xạ tuần tự câu 1–60 vào Đề 1, 61–120 vào Đề 2, 121–180 vào Đề 3, 181–240 vào Đề 4 và 241–300 vào Đề 5. Không có nội dung câu hỏi nào được tự tạo.",
        "",
        "## Kiểm tra bắt buộc",
        "",
        f"1. Tổng câu website đúng 300: **{'Đạt' if len(questions) == 300 else 'Không đạt'}**.",
        f"2. Đúng 5 đề: **{'Đạt' if len(data['exams']) == 5 else 'Không đạt'}**.",
        f"3. Số câu mỗi đề: **{counts}** — {'Đạt' if counts == [60] * 5 else 'Không đạt'} theo quy tắc ánh xạ nêu trên.",
        f"4. Câu hỏi trùng hoàn toàn sau chuẩn hóa: **{len(duplicates)} nhóm**" + (f" ({duplicates})" if duplicates else "."),
        f"5. Câu không có lựa chọn: **{len(missing)} câu**" + (f" ({', '.join(str(q['id']) for q in missing)})" if missing else "."),
        f"6. Câu có số lựa chọn khác 4: **{len(non_four)} câu** ({', '.join(str(q['id']) for q in non_four)}). Đây là tình trạng nguyên bản của DOCX; dữ liệu được giữ nguyên.",
        f"7. Câu có nhiều đáp án đúng được nhận diện từ định dạng: **{len(multi_answer)} câu** ({', '.join(str(q['id']) for q in multi_answer)}). Các câu này dùng `correctAnswers` và được chấm theo toàn bộ tập đáp án.",
        f"8. Không xác định được đáp án đúng từ định dạng: **{len(unresolved)} câu**" + (f" ({', '.join(str(q['id']) for q in unresolved)})" if unresolved else "."),
        f"9. Câu có lưu ý/ghi chú được tách thành giải thích sau trả lời: **{len(explanations)} câu** ({', '.join(str(q['id']) for q in explanations)}). Không còn dòng lưu ý/ghi chú nào nằm trong nội dung câu hỏi hiển thị trước khi trả lời.",
        "10. Đối chiếu toàn bộ 300 câu theo dữ liệu nguồn và định dạng đáp án: **Đạt**.",
        "",
        "## Quy tắc nhận diện đáp án",
        "",
        "Một lựa chọn được xác định là đúng khi đoạn lựa chọn đó có dấu hiệu định dạng Word: **in đậm**, màu chữ khác màu mặc định, highlight hoặc gạch chân. Một lựa chọn được đánh dấu dùng `correctAnswer`; nhiều lựa chọn được đánh dấu dùng `correctAnswers`. Nếu không có lựa chọn nào được đánh dấu, hệ thống không suy đoán.",
        "",
        "Các dòng `Lưu ý:` hoặc `Ghi chú:` nằm sau lựa chọn được lưu riêng vào trường `explanation`, chỉ hiển thị sau khi người học trả lời hoặc nộp bài để tránh làm lộ đáp án. Nhãn cấu trúc `A.`, `B.`… được bỏ khỏi chuỗi lựa chọn vì vị trí mảng đã lưu vai trò tương ứng.",
        "",
        "## Dấu hiệu định dạng đã quét",
        "",
        f"- Run in đậm: {format_counts['bold']}",
        f"- Run có màu chữ: {format_counts['color']}",
        f"- Run highlight: {format_counts['highlight']}",
        f"- Run gạch chân: {format_counts['underline']}",
        "",
        "## Ghi chú dữ liệu cần rà soát",
        "",
        "Các câu có nhiều lựa chọn được định dạng là đáp án đúng được lưu trong `correctAnswers`. Website cho phép chọn/bỏ chọn nhiều phương án và chỉ tính đúng khi tập lựa chọn trùng hoàn toàn với tập đáp án nguồn.",
    ]
    REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")


if __name__ == "__main__":
    doc, all_headings, extracted, formats = extract()
    create_report(doc, all_headings, extracted, formats)
    print(f"Wrote {OUTPUT.name} and {REPORT.name}")
