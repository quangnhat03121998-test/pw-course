### Function expression 
- Định nghĩa function bằng cách gán cho nó 1 biến

```
const add = function(a,b) {
    return a + b;
};
```
### Lambda funtion 
- Đây là cách viết **ngắn gọn hơn** cho function 
- Sử dụng dấu  ```=>```
```
const add = (a,b) => {
    return a + b;
};
```
**Note**: Nếu chỉ có 1 dòng code, thì có thể bỏ cặp ngoặc nhọn ```{}```

#### Một số cách viết khác của Lambda function

**Không có tham số**
```
// Phải có dấu ngoặc tròn rỗng

const greet = () => console.log('Hello'); 
```
**Một tham số**
```
// Có thể bỏ dấu ngoặc tròn

const double = x => x * 2 ;
```
### Anonymous function 
- Một function **Không tên**
- Được sử dụng khi function **Chỉ cần dùng 1 lần** hoặc làm **callback**

```
function () {
    console.log("I'm anonymous");
}

// Gán cho biến

const anonymousFunc = function () {

};

// Dùng làm callback 

setTimeout(function() {
    console.log('Anonymous callback');
}, 1000);
```
### DOM 
- Mở cây DOM của 1 trang web bằng cách bấm F12 hoặc chuột phải chọn inspect sau đó vào tab "Element" 

- Có 2 loại thẻ trong DOM '
    - Thẻ tiêu chuẩn.
    - Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa

#### Một số thẻ tiêu chuẩn thường gặp

#### Thẻ cấu trúc cơ bản 

- ```<html>```: Thẻ gốc của trang.
- ```<head>```: Chứa metadata: tiêu đề website, hiển thị Google.
- ```<body>```: Nội dung của cả website hiển thị 
- ```<div>```: Khối/container chung
- ```<span>```: inline container
- ```<header>```, ```<footer>```, ```<nav>```,```<section>```: Thẻ ngữ nghĩa

#### Thẻ nội dung

- ```<h1>``` đến ```<h6>```: tiêu đề
- ```<p>```: đoạn văn
- ```<a>```: Liên kết
- ```<img>```: Hình ảnh
- ```<ul>```,```<ol>```,```<li>```: Danh sách

#### Thẻ Form (Quan trọng cho testing): 

- ```<form>```: biểu mẫu
- ```<input>```: Ô nhập text
- ```<button>```: nút bấm
- ```<select>``` và ```<option>```: Dropdown 
- ```<textarea>```: Vùng văn bản nhiều dòng

### Selector
Có 3 loại selector thường dùng: 
- XPath
- CSS selector
- Playwright selector

#### Xpath
- Có 2 loại: 
    - tuyệt đối: đi dọc theo cây DOM (Bắt đầu bằng ```/```)
    - tương đối: tìm dựa vào đặc tính (bắt đầu bởi ```//```)
        - //tenthe[@thuoctinh = "giá trị"]
        - Nên dùng Xpath tương đối

### Playwright basic syntax
- Test: đơn vị cơ bản để khai báo một test
```
import {test} from '@playwright/test';

test('Tên test', async({page}) => {
    //Code test
});
```
- Step: đơn vị nhỏ hơn, để khai báo các step của test case

```
await test.step('Tên step', async () => {
    //Code 
});
```
    - Step nên được map 1-1 với test case để dễ dàng quản lý

- Navigate:

```
await page.goto('<URL>');
```

- Locate: 

```
page.locator('//input[@id = "email"]')
```

- Click: 

```
await page.locator('//button').click();
```

- Input: 

```
page.locator('//input').fill('Playwright VietNam');
```
- Radio/Checkbox: 
```
//Kiểm tra giá trị có check hay ko
const isChecked = page.locator('//input').isChecked();

//Check/Uncheck
page.locator('//input').check();
page.locator('//input').setChecked(false);

```

- Select:

```
await page.locator('//select[@id ="country"]').selectOption('USA')
```
- Upload file 
```
await page.locator('//input[@id = "profile"]').
setInputFiles('<File-path>');
```