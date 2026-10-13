# Báo cáo kiểm tra trích xuất dữ liệu

- Trạng thái: **ĐẠT CÓ CẢNH BÁO**
- File nguồn: `MLN111-300.docx` tải từ Google Docs do người dùng cung cấp (SHA-256: `bd2f0c6bb98715fd305bd3cdd13f7208c681fe754242488dc18bf0aadad93482`)
- Tổng đoạn văn: **1795**; tổng bảng: **0**
- Tổng tiêu đề câu hỏi phát hiện trong DOCX: **300** (đánh số liên tục 1–300)
- Tổng câu xuất ra website: **300**
- Tổng đề xuất ra: **5**; số câu từng đề: **60, 60, 60, 60, 60**

## Cấu trúc nguồn

Nguồn Google Docs có đúng **300** câu, đánh số liên tục từ 1 đến 300. Tài liệu không chứa tiêu đề hoặc dấu phân cách riêng cho 5 đề và không reset số sau mỗi 60 câu. Theo cấu trúc 5 đề × 60 câu được yêu cầu, bộ trích xuất ánh xạ tuần tự câu 1–60 vào Đề 1, 61–120 vào Đề 2, 121–180 vào Đề 3, 181–240 vào Đề 4 và 241–300 vào Đề 5. Không có nội dung câu hỏi nào được tự tạo.

## Kiểm tra bắt buộc

1. Tổng câu website đúng 300: **Đạt**.
2. Đúng 5 đề: **Đạt**.
3. Số câu mỗi đề: **[60, 60, 60, 60, 60]** — Đạt theo quy tắc ánh xạ nêu trên.
4. Câu hỏi trùng hoàn toàn sau chuẩn hóa: **25 nhóm** ([[1, 122], [3, 248], [4, 61], [6, 127], [8, 125, 126], [10, 133], [19, 168], [20, 284], [23, 232], [28, 299], [29, 250], [30, 300], [32, 220], [56, 268], [62, 182], [65, 262], [69, 264], [71, 276], [73, 222], [77, 286], [86, 209], [97, 251], [111, 243], [131, 274], [153, 275]])
5. Câu không có lựa chọn: **0 câu**.
6. Câu có số lựa chọn khác 4: **11 câu** (162, 170, 172, 173, 180, 181, 182, 224, 235, 296, 298). Đây là tình trạng nguyên bản của DOCX; dữ liệu được giữ nguyên.
7. Câu có nhiều đáp án đúng được nhận diện từ định dạng: **8 câu** (9, 56, 66, 114, 214, 215, 258, 268). Các câu này dùng `correctAnswers` và được chấm theo toàn bộ tập đáp án.
8. Không xác định được đáp án đúng từ định dạng: **0 câu**.
9. Câu có lưu ý/ghi chú được tách thành giải thích sau trả lời: **7 câu** (9, 10, 205, 210, 214, 215, 217). Không còn dòng lưu ý/ghi chú nào nằm trong nội dung câu hỏi hiển thị trước khi trả lời.
10. Đối chiếu toàn bộ 300 câu theo dữ liệu nguồn và định dạng đáp án: **Đạt**.

## Quy tắc nhận diện đáp án

Một lựa chọn được xác định là đúng khi đoạn lựa chọn đó có dấu hiệu định dạng Word: **in đậm**, màu chữ khác màu mặc định, highlight hoặc gạch chân. Một lựa chọn được đánh dấu dùng `correctAnswer`; nhiều lựa chọn được đánh dấu dùng `correctAnswers`. Nếu không có lựa chọn nào được đánh dấu, hệ thống không suy đoán.

Các dòng `Lưu ý:` hoặc `Ghi chú:` nằm sau lựa chọn được lưu riêng vào trường `explanation`, chỉ hiển thị sau khi người học trả lời hoặc nộp bài để tránh làm lộ đáp án. Nhãn cấu trúc `A.`, `B.`… được bỏ khỏi chuỗi lựa chọn vì vị trí mảng đã lưu vai trò tương ứng.

## Dấu hiệu định dạng đã quét

- Run in đậm: 314
- Run có màu chữ: 0
- Run highlight: 0
- Run gạch chân: 0

## Ghi chú dữ liệu cần rà soát

Các câu có nhiều lựa chọn được định dạng là đáp án đúng được lưu trong `correctAnswers`. Website cho phép chọn/bỏ chọn nhiều phương án và chỉ tính đúng khi tập lựa chọn trùng hoàn toàn với tập đáp án nguồn.
