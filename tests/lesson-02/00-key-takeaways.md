## Kiến thức buổi 2

### Version control system
- Hệ thống quản lý khác phiên bạn.

- có 3 vùng (local, centralize, distributed)

### GIT
- 3 states including (working directory, Staging area, repository)

- ```git init```: khởi tạo repo local
- ```git remote add origin <url>```: kết nối repo online và repo local
- ```git add .```: Thêm tất cả untracked files vào staging 
- ```git commit -m "commit name"```: đặt tên cho commit
- ```git push origin main```: push code lên nhánh chính. 

- ```git config --global user.name "user name"```: config user name cho git
- ```git config --global user.email "email"```: config user email cho git

**Note**: sử dụng ```--global``` sẽ config cho toàn bộ các repo ở local.

- ```git status```: xem trạng thái file (xanh là ở staging area, đỏ là file đang ở working directory)
- ```git log```: Checking tất cả các commit.

### JavaScript cơ bản 
- ```console.log("content")```: log ra màn hình nội dung
- ```node <tên file>```: chạy file (nếu file nằm trong folder thì phải dẫn đường link)

- khi khai báo biến ("có thể thay đổi giá trị") thì dùng ```let```
- khi khai báo hằng số dùng ```const <tên hằng> = <giá trị>```
- muốn kiểm tra kiểu dữ liệu của biến thì sử dụng ```typeof <variable>```

### Toán tử cơ bản trong JavaScript
- ```==```: so sánh bằng ko kiểm tra kiểu dữ liệu
- ```===```: kiểm tra bằng cả giá trị và dữ liệu
- ```&&```: và 
- ```||```: hoặc
- ```++x```: tăng giá trị trước, trả kết quả sau.
- ```x++```: trả giá trị trước, tăng sau.
- ```for(<giá trị ban đầu>, < kiểm tra điều kiện >, <tăng giá trị>)```: vòng lặp for cơ bản.

