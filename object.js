//copy object
//object assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

//manual compare
console.log(returnedTarget === target);
// expected output: true

console.log(returnedTarget);

console.log(returnedTarget);

//spread operator
const obj = { a: 1, b: 2, c: 3 };

const clone = { ...obj };
// ----> shallow opy
//
//
//
//

console.log(clone);

//Json parse, stringify
const obj2 = { a: 1, b: 2, c: { d: 3 } };

const clone2 = JSON.parse(JSON.stringify(obj2));

console.log(clone2);
// ----> deep copy

//
const obj3 = { a: 1, b: 2, c: { d: 3 } };
const shallowClone = { ...obj3 };
obj3.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
console.log(obj3); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}}
console.log(shallowClone); //{a:1,b:2,c:{d:34}}

const deepClone = JSON.parse(JSON.stringify(obj));
console.log(obj3); // {a:1,b:2,c:{d:34}}
console.log(deepClone); //{a: 1, b: 2, c: 3}

//spread operator

const hello = { hello: "123" };
const world = { world: "456!" };

const helloWorld = { ...hello, ...world };
console.log(helloWorld);

//thêm phần tử
const fewFruit = ["🍏", "🍊", "🍌"];
const fewMoreFruit = ["🍉", "🍍", ...fewFruit]; //thêm các phần tử của mảng fewFruit vào mảng fewMoreFruit
console.log(fewMoreFruit);

//tạo tham chiếu mới
const array = [1, 2, 3];
const copyWithEquals = array; // Thay đổi mảng array đồng nghĩa cũng sẽ thay đổi mảng copyWithEquals
const copyWithSpread = [...array]; // Thay đổi mảng array sẽ không ảnh hưởng đến mảng copyWithSpread

array[0] = 4; //thay đổi phần tử đầu tiên của mảng array

console.log(...array); //4 2 3
console.log(...copyWithEquals); //4 2 3
console.log(...copyWithSpread); //1 2 3
