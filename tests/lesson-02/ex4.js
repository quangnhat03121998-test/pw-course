const height = 170; //khai báo chiều cao (cm) 

//Kiểm tra nếu chiều cao ko hợp lệ
if (height <= 100) {
    console.log("chiều cao không hợp lệ, hãy nhập lại");
};
//kiểm tra nếu chiều cao hợp lệ
if (height > 100) {
    const ideal_weight = [(height - 100) * 9] / 10;
    const max_weight = height - 100;
    const min_weight = [(height - 100) * 8] / 10;

    console.log("Cân nặng lý tưởng / tối đa/ tối thiểu của bạn là" + " " + ideal_weight + "/" + max_weight + "/" + min_weight);
};