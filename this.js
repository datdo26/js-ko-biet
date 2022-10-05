//example
console.log("hello");
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

// this trong => {}
// const showUser = () => {
//   console.log(this);
// };

// showUser();
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const foo = 1;
// console.log("foo:", foo);
// bar = 2;
// console.log("bar: ", bar);

//STRICT MODE
//ko thể sử dụng 1 biến mà k khai báo
//global variable
// const foo = () => {
//   bar = 1;
// };
// foo();
// console.log("bar in foo: ", bar);

//local variable
// const foo = () => {
//   const bar = 1;
//   console.log("bar: ", bar);
//   //log bth, chỉ dùng dc trong function
// };

// foo();
// console.log("bar: ", bar); //uncaught error, bar is not defined

//báo lỗi assignments

//without strict mode
// NaN = "lol"; //nothing happen
// const obj = {};
// Object.defineProperty(obj, "prop", { value: 1, writable: false });
// obj.prop;
// console.log("obj.prop: ", obj.prop);
// obj.prop = 10;
// console.log("obj.prop: ", (obj.prop = 10));
// obj.prop;
// console.log("obj.prop: ", obj.prop);

//with strict mode

//báo lỗi khi delete những thứ k thể xoá
// ("use strict");
// var foo = 1;
// function bar() {}
// delete foo; // Uncaught SyntaxError: Delete of an unqualified identifier in Strict Mode.
// delete bar;
// console.log("foo", foo);

// var obj = {};
// Object.defineProperty(obj, "baz", {
//   value: 1,
//   configurable: false,
// });
// delete obj.baz; // Uncaught TypeError: Cannot delete property 'baz' of #<Object>

//các tham số của 1 hàm ko được phép trùng nhau
// ("use strict");
// const foo = (bar, baz, bar) => {};
// console.log("foo:", foo(1, 2, 3));
// // Uncaught SyntaxError: Duplicate parameter name not allowed

//ko sử dụng tiền tố 0
// ("use strict");
// const foo = 010; // Uncaught SyntaxError: Octal literals are not allowed in Strict Mode.
// console.log("foo: ", foo);

//ko thể sử dụng with
// ("use strict");
// const foo = 1;
// const bar = { foo: 2 };
// with (bar) {
//   console.log("foo:", foo); //ko rõ foo là thuộc tính hay thuộc tính của bar
// }

//curry function
// const log = (level, time, msg) => {
//   console.log(level + "-" + time + "-" + msg);
// };

// const logAccesToday = (msg) => {
//   log("Access", "Today", msg);
// };

// logAccesToday("Sv Access");

//Aplly và Call
// const obj = {
//   firstName: "Dat",
//   lastName: "Do",
//   mMethod: function (firstName, lastName) {
//     firstName = firstName || this.firstName;
//     lastName = lastName || this.lastName;
//     console.log("Hello " + firstName + " " + lastName);
//   },
// };
// const obj1 = {
//   firstName: "xxx",
//   lastName: "yyy",
// };
// obj.mMethod();
// obj.mMethod.call(obj1);
// obj.mMethod.apply(obj1);
// obj.mMethod.call(obj1, "xxx", "yyy");
// obj.mMethod.apply(obj1, ["xxx", "yyy"]);

//để set this cho hàm callback
// function print() {
//   console.log(this.mVal);
// }
// const obj = {
//   mVal: "abcde",
//   mMethod: function (callback) {
//     callback.call(this);
//   },
// };
// obj.mMethod(print);

//để mượn hàm
// function testParams(firstParam, secondParam, thirdParam) {
//   const args = Array.apply(null, arguments);
//   console.log(args);
// }

// testParams(1, 2, 3);

//mở rộng chức năng hàm

// const user = {
//   name: "DAT",
//   showName: function () {
//     console.log("Ten toi la: ", this.name);
//   },
// };

// user.showName();

// const oldName = user.showName.bind(user);
// user.showName = () => {
//   console.log("before show name");
//   oldName.call(this);
//   console.log("after show name");
// };

// user.showName();
