# MLN Quiz

Website trắc nghiệm tĩnh cho ba học phần MLN111, MLN122 và PRM393, dùng HTML, CSS, JavaScript và LocalStorage.

- MLN111: 300 câu chia thành 5 đề.
- MLN122: 515 câu chia thành 9 đề (8 đề × 60 câu và đề cuối 35 câu).
- PRM393: 248 câu chia thành 5 đề, mỗi đề tương ứng một file `PRM393_*.md` (SP26 FE, SP26 B5 FE, SU26 FE, SU26 FE RE, SU26 B5 FE).

## Chạy website

Tại thư mục dự án, chạy:

```powershell
python -m http.server 8000
```

Mở `http://localhost:8000` trong trình duyệt. Không mở `index.html` trực tiếp vì trình duyệt chặn `fetch()` tới file JSON khi dùng giao thức `file://`.

## Tái tạo dữ liệu

```powershell
python extract_questions.py
python extract_mln122.py
python extract_prm393.py
```

Các lệnh tạo lại `questions.json`, `questions-mln122.json`, `questions-prm393.json` và các báo cáo kiểm tra tương ứng. Chi tiết câu trùng, số lựa chọn và đáp án multi-choice nằm trong báo cáo.
