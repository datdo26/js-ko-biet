// console.log("spread operator");

// const hello = { hello: "123456" };
// const world = { world: "7890" };

// const helloWorld = { ...hello, ...world };
// console.log(helloWorld);

// //sao chép mảng

// const school = ["usth", "hust", "fpt"];
// console.log("school:", school);
// const moreSchool = [...school];
// console.log("moreSchool:", moreSchool);

// //sử dụng mảng như danh sách tham số
// const numbers = [30, -1, 0, 50];
// console.log("number_arr:", numbers.pop()); //xoá phần tử cuối của arr
// numbers.pop();
// numbers.push("60");
// console.log("numbers:", Math.min(numbers)); //NaN do hàm k nhận array là 1 tham số
// console.log("numbers1:", Math.min(...numbers));
// console.log("numbers2:", Math.max(...numbers));

// const exNumber = (f1, f2, f3) => {
//   console.log(`idk: ${f1}, ${f2}, ${f3} `);
// };
// exNumber(...numbers);

// //thêm phần tử vào mảng
// const fewNumbers = [1, 2, 3, 4, 5];
// const fewMoreNumbers = [...fewNumbers, 6, 7, 8, 9, 10];

// console.log("few more numbers:", fewMoreNumbers);

// //kết hợp nhiều object
// const obj1 = { hello: "1" };
// const obj2 = { world: "2" };

// const obj3 = { ...obj1, ...obj2, js: "javascript" };
// console.log("obj3: ", obj3);

// const obj4 = {
//   ...obj1,
//   ...obj2,
//   js: () => {
//     console.log("dom");
//   },
// };

// obj4.js();

// // //lưu ý
// const array = ["mot", "hai", "ba"];
// const copyWithEquals = array; //thay đổi mảng array thay đổi mảng copy equal
// const copyWithSpread = [...array]; //thay đổi mảng array ko thay đổi copy spread

// array[0] = "bon";

// console.log("array", array);
// console.log("copy equal", ...copyWithEquals);
// console.log("copy spread", ...copyWithSpread);

// //rest operator
// //khai báo hàm với số lượng tham số ko xác định
// function restTest(...agrs) {
//   console.log("restTest: ", agrs);
// }

// restTest(1, 2, 3, 4, 5, 6, 7, 8);

// const otherSubject = [6, 7, 5, 4];

// function sum(...theArgs) {
//   return theArgs.reduce((previous, current) => {
//     return previous + current;
//   });
// }

// console.log("sum: ", sum(1, 2, 3, 4));

// function test(a, b, ...moreArgs) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("moreArgs", moreArgs);
// }

// test("one", "two", "three", "four", "five");

// //shalow copy: copy pbject cha, các prop trong đc reference về obj cũ

// const src = { p1: { c1: 1, c2: "2" }, p2: "p2" };

// const dist1 = Object.assign({}, src); //sao chép từ obj này sang obj khác
// src.p1 === dist1.p1;
// src.p1.c1 = 2;
// console.log("dist1.p1:", dist1.p1.c1);

// //deep copy: copy hết các prop

// const dist2 = JSON.parse(JSON.stringify(src));
// src.p1 === dist2.p1;
// src.p1.c1 = 2;

// console.log("dist2.p1:", dist2.p1.c1);

//ko dùng lodash with simple obj
// var oldObject = {
//   name: "A",
//   address: {
//     street: "Station Road",
//     city: "Pune",
//   },
// };

// // var newObject = JSON.parse(JSON.stringify(oldObject));

// var newObject = { ...oldObject };
// newObject.address = { ...newObject.address };
// newObject.address.city = "Delhi";
// newObject.name = "B";
// console.log("newObject");
// console.log(newObject);
// console.log("oldObject");
// console.log(oldObject);

//destructing trong js, gán các thuộc tính của obj hoặc arry
// var a, b;
// [a, b] = [1, 2];
// console.log("a: ", a, "b: ", b);

//sử dụng
// const [a, b] = [1, 2];
// console.log("a: ", a, "b: ", b);

// //array
// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// //object
// const { a, b } = { a: 1, b: 2 };
// console.log(a, b);

//add c
// const { a, b, c } = { a: 1, b: 2, c: () => 3 };
// console.log(a, b, c);

//add ..c
// const { a, b, ...c } = { a: 1, b: 2, c: () => 3, d: 4 };
// console.log(a, b, c);

//arrow function 1 tham số
// const showMessage = (phrase) => phrase.split(" ");
// console.log(showMessage("Coding For Fun"));
// ['Coding', 'For', 'Fun']

//arrow function nhiều tham số
// const multiVar = (a, b, c) => {
//   return a * b * c;
// };
// console.log("result a * b * c: ", multiVar(4, 5, 6));
//result a * b * c:  120

//không có tham số
// const alertMsg = () => {
//   // alert("message here");
// };
// alertMsg();

//với object
// const staffInfo = (id, name) => ({ id: id, name: name });
// console.log("staff info:", staffInfo(1, "Dat"));

//object create
// Initialize an object with properties and methods
// const job = {
//   position: "cashier",
//   type: "hourly",
//   isAvailable: true,
//   showDetails() {
//     const accepting = this.isAvailable
//       ? "is accepting applications"
//       : "is not currently accepting applications";

//     console.log(
//       `The ${this.position} position is ${this.type} and ${accepting}.`
//     );
//   },
// };

// // Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "developer";
// barista.type = "minutes";
// barista.showDetails();

//Object.keys
// const employees = {
//   boss: "Michael",
//   secretary: "Pham",
//   sale: "Brian",
//   accountant: "Mike",
// };

// const keys = Object.keys(employees);
// console.log("keys: ", keys);

// keys:
// (4) ['boss', 'secretary', 'sale', 'accountant']
// 0: "boss"
// 1: "secretary"
// 2: "sale"
// 3: "accountant"

// //sử dụng method array
// Object.keys(employees).forEach((key) => {
//   let value = employees[key];
//   console.log(`${key}: ${value}`);
// });

//Object.values

// const session = {
//   id: 1,
//   time: `03-June-2022`,
//   device: "laptop",
//   browser: "chrome",
// };

// const values = Object.values(session);
// console.log("values:", values);
//values: (4) [1, '03-June-2022', 'laptop', 'chrome']0: 11: "03-June-2022"2: "laptop"3: "chrome"length: 4[[Prototype]]: Array(0)

//Object entries
// const operationSystem = {
//   name: "MacOS",
//   version: "12.3.1",
//   license: "Closed",
// };

// const entries = Object.entries(operationSystem);
// console.log("entries: ", entries);
// entries:
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'MacOS']
// 1: (2) ['version', '12.3.1']
// 2: (2) ['license', 'Closed']

//Object.freeze
// const user = {
//   userName: "DatDT40",
//   password: "123456",
// };
// // const newUser = Object.freeze(user); //freeze

// const newUser = Object.seal(user); //Object.seal
// newUser.userName = "Thanh Dat Do";
// newUser.password = "7890";
// newUser.active = true;

// console.log("newUser", newUser);
// newUser {userName: 'DatDT40', password: '123456'} //freeze

// newUser {userName: 'Thanh Dat Do', password: '7890'} //seal

// console.log(this);

// this trong => {}
// const showUser = () => {
//   console.log(this);
// };

// showUser();
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//this trong class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   // Adding a method to the constructor
//   showName() {
//     console.log(this.name);
//   }
// }

// let person1 = new Person("Dat");
// person1.showName(); // Dat

//this trong object
// const Person = {
//   name: "Dat",
//   age: "21",
//   setInfor: function (name, age) {
//     this.name = name;
//     this.age = age;
//   },
//   showInfor: function () {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// Person.showInfor();
//Dat
//21

//Strict mode
