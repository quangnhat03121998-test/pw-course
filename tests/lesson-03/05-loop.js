//1. Tính tổng từ 1 -> 100
const arr = [];
let sum = 0;

for (i = 0; i < 100; i++) {
    arr.push(i + 1);
    sum = sum + arr[i];
};

console.log("Tổng từ 1 đến 100 là " + sum);
console.log("");

//3. tạo ra 1 mảng chứa các số lẻ từ 1 -> 99

const odd = [];

for (i = 1; i < 100; i = i + 2) {
    odd.push(i);

};

console.log(odd);
console.log("");

//4. In ra 10 email dựa trên tên người dùng và số thứ tự

const num = [];

for (i = 0; i < 10; i++) {
    num.push(i + 1);
    console.log("user" + num[i] + "@example.com");
};
console.log("");

//5. Tính tổng doanh thu 12 tháng trong năm 

const revenue = [];
let sumRevenue = 0;

for (i = 0; i < 12; i++) {
    revenue.push({
        month: i + 1,
        total: 100 + i + 1 //giả sử doanh thu từng tháng = 100 + số tháng
    });
    sumRevenue = sumRevenue + revenue[i].total;

    console.log(`Doanh thu tháng ${revenue[i].month} là ${revenue[i].total}`);
};
console.log(`Tổng doanh thu 12 tháng là ${sumRevenue}`);
console.log("");

//2. in ra bảng cửu chương từ 2 đến 9
let ketQua = 0;
for (i = 2; i < 10; i++) {
    for (j = 1; j < 11; j++) {
        ketQua = i * j;
        console.log(`${i} x ${j} = ${ketQua}`);
    };
    console.log("");
};

