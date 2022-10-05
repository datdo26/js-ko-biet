// const arr = ["a", "b", "c"];

// //for{
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// //for in
// for (let i in arr) {
//     console.log(arr[i]);
// } //a,b,c

// for (let prop in "str") console.log(prop);
// //0, 1, 2
// for (let prop in { a: 1, b: 2, c: 3 }) console.log(prop);
// //a, b, c

// for (let prop in new Set(["a", "b", "c", "d"])) console.log(prop);
// //undefined

// //for of
// for (let i of arr) {
//     console.log(i);
// } //a,b,c

// for (let val of "str") console.log(val);
// //s, t, r
// // for (let val of { a: 1, b: 2, c: 3 }) console.log(val);
// //typeError: not iterable

// for (let val of new Set(["a", "b", "c", "d"])) console.log(val);
// //a, b, c, d

//empty element
// const empty = ["a", "", "d"];
// for (let i = 0; i < empty.length; ++i) {
//     console.log(empty[i]);
// }

// // Prints "a, c"
// empty.forEach((v) => console.log(v));

// // Prints "a, c"
// for (let i in empty) {
//     console.log(empty[i]);
// }

// // Prints "a, undefined, c"
// for (const v of empty) {
//     console.log(v);
// }

//forEach trong async/await
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
    sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
];

// async function getTodos() {
//     await urls.forEach(async (url, idx) => {
//         const todo = await fetch(url);
//         console.log(`Received Todo ${idx + 1}:`, todo);
//     });

//     console.log("Finished!");
// }

// async function getTodos() {
//     const promises = urls.map(async (url, idx) =>
//         console.log(`Received Todo ${idx + 1}:`, await fetch(url))
//     );

//     await Promise.all(promises);

//     console.log("Finished!");
// }

async function getTodos() {
    for (const [idx, url] of urls.entries()) {
        const todo = await fetch(url);
        console.log(`Received Todo ${idx + 1}:`, todo);
    }

    console.log("Finished!");
}
getTodos();
