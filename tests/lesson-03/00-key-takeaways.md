## Kiến thức buổi 03

### Git Undo

#### Thay đổi commit message

```git commit --amend -m"message"```

#### File staging -> working directory
```git restore --staged "filename"``` ("." nếu muốn đưa toàn bộ file từ staging về working directory)

#### File repository -> working directory (Xóa commit và đưa các file về vùng working directory)
```git reset HEAD~"số commit"```

**Note**: nếu chỉ có một commit thì không thể reset. Nếu muốn reset thì xóa thư mục .git đi rồi init lại

### GIT branching

#### lấy code từ server
```git pull origin main```

#### Git: branch
- Mục đích tạo ra các branch là để tạo ra các phiên bản khác nhau của code, tránh ảnh hưởng đến bản gốc.

- với lệnh ```git init`` thì nhánh mặc định tạo ra.

    - ```git config --global init.defaultBranch main``` đã đặt nhánh mặc định là nhánh main.

**Một số câu lệnh với nhánh**

- xem danh sách nhánh: ```git branch``` (phải có ít nhất 1 commit để xem các nhánh)

- Tạo nhánh mới: ```git branch <tên nhánh>```

- Chuyển sang nhánh mới: ```git checkout <tên nhánh>```

- Vừa tạo vừa chuyển sang nhánh khác ```git checkout -b <tên nhánh>```

- Xóa branch ```git branch -D <tên nhánh>``` (**Note**: không thể xóa nhánh mà user đang đứng tại đó. Do đó phải chuyển nhánh trước khi xóa)

**Note**: Luôn luôn pull code mới nhất về trước khi tạo sang nhánh mới

### Git ignore

File ```.gitignore``` là một file cấu hình trong Git, giúp chỉ định các file và các thư mục nào sẽ không được theo dõi bởi git

**Note**
- Comment trong file: #
- ghi tên file để ignore file cụ thể'
- ignore file có đuôi bất kỳ: ```*.log```

### Javascript convention

- ```snake_case```: tạm thời chưa dùng
- ```kebab-case```: dùng để đặt tên **file** và **folder**
- ```camelCase```: đặt tên biến, hàm
- ```PascalCase```: đặt tên class

### Dùng console.log nâng cao

- Trích biến: ```console.log(`${variable_name}`)```

### Javascript object

Object là kiểu dữ liệu dùng để lưu trữ key value

#### Cách khai báo object

```
const/let <variable_name> = {
    key1: value1,
    key2: value2
}
```

#### Cách sử dụng
```
console.log (<variable_name>.key1)
```

#### Gán lại
```
Ex: user.age = 28
    product ["manufacturer"]["year"] = 2025
```

### Array

```
const arr = [3,7,9];

console.log(arr[vị trí])

```

### Function 
Đoạn code được viết để tái sử dụng

```
function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;

    return dienTich; 

}
```