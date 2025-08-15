🚀 Quy trình làm việc với Git
📌 Trước khi bắt đầu code
chỉ pull khi đã làm xong tính năng ở branch của mình, nếu chưa làm xong thì không cần mà cứ tiếp tục làm.

git pull origin main
🌿 Tạo branch mới
git checkout -b <ten-branch>
Ví dụ:

git checkout -b header
💻 Trong quá trình code
Dù chưa xong vẫn phải commit thường xuyên để tránh mất dữ liệu.

git add .
git commit -m "Thông tin rõ ràng về nội dung commit"
❌ Tránh các nội dung commit không rõ ràng như:

asd
123123
aaa
✅ Ví dụ nội dung commit:

"add Header UI"
"fix responsive issue for mobile"
"update login validation"
📤 Push code lên Git
git push origin <ten-branch>
Ví dụ:

git push origin header
🔁 Kiểm tra & chuyển branch
Kiểm tra đang ở branch nào:
git branch
Chuyển sang branch khác:
git checkout <ten-branch>
