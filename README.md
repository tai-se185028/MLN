# MLN111 Quiz

Website trắc nghiệm tĩnh cho hai học phần MLN111 và MLN122, dùng HTML, CSS, JavaScript và LocalStorage. MLN111 có 300 câu chia thành 5 đề. MLN122 có 515 câu chia thành 9 đề (8 đề × 60 câu và đề cuối 35 câu).

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
```

Các lệnh tạo lại `questions.json`, `questions-mln122.json` và hai báo cáo kiểm tra tương ứng. Chi tiết câu trùng, số lựa chọn và đáp án multi-choice nằm trong báo cáo.
