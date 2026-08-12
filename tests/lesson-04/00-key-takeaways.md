## Javascript nâng cao

### Phạm vi của biến

Javascript có **3 loại** phạm vi
- **Block scope**: biến được khai báo trong cặp ngoặc **nhọn**
    - ```var```: không bị giới hạn bởi cặp ngoặc nhọn 
    - ```let/const```: bị giới hạn bởi cặp ngoặc nhọn, khi dùng ở ngoài sẽ **undefined**
- **Function scope**: các biến được khai báo trong hàm, khi sử dụng ở ngoài sẽ **undefined**
- **Global scope**: được khai báo ở dòng code tự do, không bị giới hạn bởi khối hay hàm.

### Break và continue

- ```break``` dùng để thoát vòng lặp ngay lập tức.
- ```continue``` dùng để bỏ qua phần còn lại của vòng lặp và chuyển sang lần lặp kế tiếp.

### Câu điều kiện nâng cao

- ```if...else```: dùng để thực hiện code cho trường hợp true, false

**Cú pháp**
```
if(điều kiện) {
    <logic>
}
else {
    <logic>
}
```
- ```if...else..if```: kiểm tra nhiều điều kiện theo thứ tự 
**Cú pháp**
```
if(điều kiện) {
    <logic>
}
else if(điều kiện) {
    <logic>
}
else {
    <logic>
}
```
### Ternary operator: cách viết ngắn gọn cho if...else
**Ví dụ**
```
let age = 20;

let status = (age >= 18) ? "Người lớn": "Trẻ em";

```
### Vòng lặp nâng cao

```For...in loop```: dùng để duyệt qua các thuộc tính của object

**Ví dụ**
```
const person = {
    name: "John",
    age: 30
};

for (let key in person){
    console.log(`${key} : ${person[key]}`);
};
```
```ForEach```: dùng để thực hiện function với 1 phần tử trong array.**Không thể** dùng break và continue.
**Ví dụ**
```
const numbers = [1, 2, 3, 4];

numbers.forEach(function(value){
    console.log(value);
});
```
### Utils function

Utils function là hàm có sẵn của Javascript, giúp code nhanh hơn, gọn hơn 

**String util**

```trim()```: bỏ khoảng trắng 2 đầu

```trimStart()```: bỏ trắng ở đầu

```trimEnd()```: bỏ trắng ở cuối

```toUpperCase()```: chữ thường -> chữ hoa

```toLowerCase()```: chữ hoa -> chữ thường

```includes()```: kiểm tra chuỗi có bao gồm chuỗi con không.

```split()```: cắt chuỗi

```replace("A", "B")```: thay chuỗi A bằng chuỗi B

**Array util**

```push(<value>)```: thêm giá trị vào cuối mảng

```unshift(<value>)```: thêm giá trị vào đầu mảng

```shift()```: cắt giá trị đầu mảng

```pop()```: cắt giá trị cuối mảng

```splice(<vị trí>, <số phần tử cần xóa>, <phần tử thêm vào>)```: thêm vào giữa

```find(x => x > 20)```: trả về phần tử đầu tiên hợp lệ 

```filter(x => x > 20)```: trả về tất cả phần tử hợp lệ

```map(x => x * 2 )```: tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc

```sort((a,b) => a - b)```: sắp xếp mảng tăng dần 