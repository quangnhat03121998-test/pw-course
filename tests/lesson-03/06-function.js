
//1. Viết hàm multiply nhận 2 tham số a và b và in ra kết quả
function multiply(a, b) {
    //Kiểm tra kiểu dữ liệu xem có hợp lệ ko
    if ((typeof a !== "number") || (typeof b !== "number")) {
        return "Dữ liệu không hợp lệ, hãy nhập lại";

    };
    // Thực hiện bài toán khi hợp lệ
    const ketQua = a * b;
    return ketQua;
};

console.log(multiply(2, 3));
console.log(multiply(4, 4));
console.log("");

//2. viết hàm findMin nhận 3 tham số a, b, c và trả về giá trị nhỏ nhất
function findMin(a, b, c) {
    //Kiểm tra kiểu dữ liệu xem có hợp lệ ko
    if ((typeof a !== "number") || (typeof b !== "number") || (typeof c !== "number")) {
        return "Dữ liệu không hợp lệ, hãy nhập lại";
    };
    // Thực hiện bài toán khi hợp lệ
    let min = a;
    if (b < min) {
        min = b;
    };
    if (c < min) {
        min = c;
    };
    return min;
};

console.log(findMin("4", 5, 6));
console.log(findMin(-1, 2, 3));
console.log(findMin(2, 2, 3));
console.log("");

//3. Viết hàm getTopStudents nhận 2 tham số...

function getTopStudents(students, threshold) {
    const listName = []; //khai báo mảng chứa danh sách tên học sinh có điểm >= threshold

    //Kiểm tra kiểu dữ liệu của 2 tham số truyền vào
    if ((typeof students !== "object") || (typeof students == null) || (typeof threshold !== "number")) {
        return "Dữ liệu nhập vào không hợp lệ, hãy nhập lại";
    };
    for (i = 0; i < students.length; i++) {
        //Kiểm tra các parameter trong object có đúng là bao gồm name và score ko 
        if ((students[i].name === undefined) || (students[i].score === undefined)) {
            return "Object không hợp lệ, hãy nhập lại"
        };
        //Kiểm tra kiểu dữ liệu của các parameter trong object (name phải là kiểu chuỗi, score phải là số)
        if ((typeof students[i].name !== "string") || (typeof students[i].score !== "number")) {
            return "Kiểu dữ liệu trong object không hợp lệ, hãy nhập lại"
        };
        //Thực hiện bài toán khi hợp lệ 
        if (students[i].score >= threshold) {
            listName.push(students[i].name);
        };
    };
    if (listName.length === 0) {
        return `Không có học sinh nào có điểm >= ${threshold}`;
    };
    return `Danh sách học sinh có điểm >= ${threshold} là ${listName}`;
};

console.log(getTopStudents(2, 3)); //Test biến student không phải object
console.log(getTopStudents([{ name: "Nguyễn A", score: 1 }], "3")); //Test biến threshold ko phải number
console.log(getTopStudents([{ Tên: "Nguyễn A", score: 8 }], 7)); //Kiểm tra paramater trong object ko phải name
console.log(getTopStudents([{ name: "Nguyễn A", điểm: 8 }], 7)); //Kiểm tra parameter trong object ko phải score
console.log(getTopStudents([{ name: 3, score: 1 }], 3)); //Kiểm tra kiểu dữ liệu của name ko phải là chuỗi
console.log(getTopStudents([{ name: "Nguyễn A", score: 1 }, { name: "Trần B", score: "một" }], 3)); //kiểm tra kiểu dữ liệu của score ko phải là number
console.log(getTopStudents([{ name: "Nguyễn A", score: 1 }, { name: "Trần B", score: 4 }], 5)); //Kiểm tra khi list ko có học sinh nào có điểm >= threshold
console.log(getTopStudents([{ name: "Nguyễn A", score: 1 }, { name: "Trần B", score: 5 }, { name: "Lê C", score: 10 }], 5)); //in list hợp lệ 
console.log("");

//4. Viết hàm calculateInterest nhận 3 tham số...

function calculateInterest(principal, rate, years) {
    //Kiểm tra 3 tham số truyền vào
    if ((typeof principal !== "number") || (principal <= 0)) {
        return "Tiền gửi ban đầu không hợp lệ, hãy nhập lại";
    };
    if ((typeof rate !== "number") || (rate <= 0)) {
        return "Lãi suất không hợp lệ, hãy nhập lại";
    };
    if ((typeof years !== "number") || (years <= 0)) {
        return "Số năm gửi không hợp lệ, hãy nhập lại";
    };
    // thực hiện bài toán khi hợp lệ
    const total = principal + ((principal * rate * years) / 100);
    return `Tổng số tiền cả gốc lẫn lãi sau ${years} năm là ${total} VND`;
};
console.log(calculateInterest("200000", 5, 3)); //Test tiền gửi không hợp lệ 
console.log(calculateInterest(200000, -5, 3)); //Test lãi suất ko hợp lệ
console.log(calculateInterest(200000, 5, true)); //Test số năm gửi ko hợp lệ
console.log(calculateInterest(200, 5, 3)); //Test hợp lệ