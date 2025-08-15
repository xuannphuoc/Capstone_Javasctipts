# 🚀 Quy trình làm việc với Git

## 📌 Trước khi bắt đầu code
Chỉ pull khi đã làm xong tính năng ở branch của mình.  
Nếu chưa làm xong thì không cần, cứ tiếp tục làm.

```bash
git pull origin main
🌿 Tạo branch mới
bash
Sao chép
Chỉnh sửa
git checkout -b <ten-branch>
Ví dụ:

bash
Sao chép
Chỉnh sửa
git checkout -b header
💻 Trong quá trình code
Dù chưa xong vẫn phải commit thường xuyên để tránh mất dữ liệu.

bash
Sao chép
Chỉnh sửa
git add .
git commit -m "Thông tin rõ ràng về nội dung commit"
❌ Tránh commit như:

bash
Sao chép
Chỉnh sửa
asd
123123
aaa
✅ Ví dụ commit rõ ràng:

bash
Sao chép
Chỉnh sửa
"add Header UI"
"fix responsive issue for mobile"
"update login validation"
📤 Push code lên Git
bash
Sao chép
Chỉnh sửa
git push origin <ten-branch>
Ví dụ:

bash
Sao chép
Chỉnh sửa
git push origin header
🔁 Kiểm tra & chuyển branch
Kiểm tra đang ở branch nào:

bash
Sao chép
Chỉnh sửa
git branch
Chuyển sang branch khác:

bash
Sao chép
Chỉnh sửa
git checkout <ten-branch>
