// ex1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(car.year);

//ex2
const person = {
    name: "Nhat",
    address: {
        street: "Road 1",
        city: "HaNoi",
        country: "Viet Nam"
    }
};

console.log(person.address.street);

//ex3
const student = {
    name: "Nick",
    grades: {
        math: 10,
        english: 9
    }
};

console.log(student["grades"]["math"]);

//ex4
const settings = {
    volume: "medium",
    brightness: 2
};

settings.volume = "high";

console.log(settings);

//ex5 
const bike = {
    brand: "Yamaha"
};

bike.color = "Blue";
console.log(bike);

//ex6

const employee = {
    name: "Nhattq",
    age: 28
};
delete employee.age;
console.log(employee);

//ex7

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
//in ra 1 học sinh lớp A
console.log(school.classA[0]);
//in ra 1 học sinh lớp B
console.log(school.classB[2]);
//in ra tất cả học sinh 
console.log(school);

