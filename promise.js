//example promise
// var promise = new Promise(function (resolve, reject) {
//     const a = "Okay";
//     const b = "Okay";
//     if (a === b) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise
//     .then(function () {
//         console.log("Success.");
//     })
//     .catch(function () {
//         console.log("Failed.");
//     });

// then();

//với resolve
// var promise = new Promise(function (resolve, resolve) {
//     resolve("Handle success.");
// });

// promise.then(
//     function (successMessage) {
//         //success handler function is invoked
//         console.log(successMessage);
//     },
//     function (errorMessage) {
//         console.log(errorMessage);
//     }
// );

// với rejected
// var promise = new Promise(function (resolve, reject) {
//     reject("Handle error.");
// });

// promise.then(
//     function (successMessage) {
//         console.log(successMessage);
//     },
//     function (errorMessage) {
//         //error handler function is invoked
//         console.log(errorMessage);
//     }
// );

//catch()

//promise reject
// var promise = new Promise(function (resolve, reject) {
//     reject("Promise Rejected.");
// });

// promise.catch(
//     function (successMessage) {
//         console.log(successMessage);
//     },
//     function (errorMessage) {
//         //error handler function is invoked
//         console.log(errorMessage);
//     }
// );

//cách khác
// var promise = new Promise(function (resolve, reject) {
//     throw new Error("Some error has occured.");
// });

// promise.then(
//     function (successMessage) {
//         console.log(successMessage);
//     },
//     function (errorMessage) {
//         //error handler function is invoked
//         console.log(errorMessage);
//     }
// );

//Promise.all
//promise sẽ resolves với một thời gian là t
// const timeOut = (t) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Completed in ${t}`);
//         }, t);
//     });
// };

// //tương ứng với t
// const durations = [1000, 2000, 3000];

// const promises = []; // một array chứa tất cả các promise

// durations.map((duration) => {
//     // Có hai sự kiện xảy ra ở đây
//     // 1. Chúng ta gọi async function (timeout())
//     // 2. Chúng ta push những promise timeout() vào một array để promise.all giải quyết
//     promises.push(timeOut(duration));
// });

// console.log(promises); //output có dạng [ Promise { "pending" }, Promise { "pending" } ...]

// //Promise.all sẽ đợi cho đến khi tất cả các promises được giải quyết
// Promise.all(promises).then((response) => console.log(response));

// //["Completed in 1000", "Completed in 2000", "Completed in 3000"]

//Promise.all
// const promisesWithoutReject = [
//     Promise.resolve("🍎 #1"),
//     "🍎 #2",
//     new Promise((resolve, reject) => setTimeout(resolve, 100, "🍎 #3")),
// ];

// Promise.all(promisesWithoutReject).then((apples) =>
//     console.log(`We can sell all these good apples`, apples)
// );

// const promisesWithOneReject = [
//     Promise.resolve("🍎 #1"),
//     "🍎 #2",
//     new Promise((_, reject) => setTimeout(reject, 100, "Bad 🍏")),
// ];

// Promise.all(promisesWithOneReject)
//     .then(console.log)
//     .catch((badApple) =>
//         console.error(`Threw out all apples because of this`, badApple)
//     );

// Promise allsettled
// const allRejectedPromises = [
//   Promise.reject("🍏 #1"),
//   Promise.reject("🍏 #2"),
//   Promise.reject("🍏 #3"),
// ];

// Promise.allSettled(allRejectedPromises)
//   .then((badApples) =>
//     console.log(`We can't sell any of these apples...`, badApples)
//   )
//   .catch((error) => console.error("This should never occur"));

// const promisesWithoutReject = [
//   Promise.resolve("🍎 #1"),
//   "🍎 #2",
//   new Promise((resolve, reject) => setTimeout(resolve, 100, "🍎 #3")),
// ];

// Promise.allSettled(promisesWithoutReject).then((apples) =>
//   console.log(
//     `We can sell all these good apples`,
//     apples.map((_) => _.value)
//   )
// );

const promisesWithOneReject = [
    Promise.resolve("🍎 #1"),
    new Promise((_, reject) => setTimeout(reject, 10, "🍏 #2")),
    "🍎 #3",
    new Promise((_, reject) => setTimeout(reject, 100, "🍏 #4")),
];

Promise.allSettled(promisesWithOneReject).then((apples) => {
    const badApples = apples
        .filter((apple) => apple.status === "rejected")
        .map((_) => _.reason);
    const goodApples = apples
        .filter((apple) => apple.status === "fulfilled")
        .map((_) => _.value);

    console.log(`Let's throw out`, badApples, `and sell the rest`, goodApples);
});

//vòng lặp đồng bộ
// for (let i = 0; i < Array.length; i++) {
//   let item = Array[i];
//   console.log(item);
// }

//vòng lặp bất đồng bộ
// async function processArray(array) {
//   array.forEach ( (item) => {
//     //định nghĩa 1 hàm
//     //lỗi tại đây
//     await function(item);
//   })
// }

// function delay() {
//   return new Promise((resolve) => setTimeout(resolve, 300));
// }

// async function delayedLog(item) {
//   await delay();
//   console.log(item);
// }

// // async function processArray(array) {
// //   array.forEach(async (item) => {
// //     await delayedLog(item);
// //   });
// //   console.log("done");
// // }

// //xử lý mảng trong lập trình tuần tự
// // async function processArray(array) {
// //   for (const item of array) {
// //     await delayedLog(item);
// //   }
// //   console.log("done");
// // }

// //xử lý mảng trong lập trình song song
// async function processArray(array) {
//   const promises = array.map(delayedLog);
//   await Promise.all(promises);
//   console.log("done");
// }
// processArray([1, 2, 3, 4, 5]);

// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("one"), 1000);
// });
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 2000);
// });
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("three"), 3000);
// });
// var p4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("four"), 4000);
// });
// var p5 = new Promise((resolve, reject) => {
//     reject("error P5");
// });

// Promise.all([
//     p1.catch((error) => {
//         console.log(error);
//     }),
//     p2.catch((error) => {
//         console.log(error);
//     }),
//     p3.catch((error) => {
//         console.log(error);
//     }),
//     p4.catch((error) => {
//         console.log(error);
//     }),
//     p5.catch((error) => {
//         console.log(error);
//     }),
// ])
//     .then((values) => {
//         console.log(values);
//     })
//     .finally(() => console.log("final all"));
