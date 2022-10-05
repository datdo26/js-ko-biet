//ex1

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [1, 2, 4, 5, 7, 8, 9, 0];

// const duplicate = arr1.filter((val) => {
//   return arr2.indexOf(val) != -1;
// });

// console.log("duplicate: ", duplicate);

//ex2
// let arr = [1, 7, 9, 2, 5, 3, 8];
// arr = arr.sort();

// for (let i = 1; i < arr.length; i++) {
//   sum = arr[i] + arr[i - 1];
//   num = [];
//   maxSum = Math.max(sum);
//   firstElements = num.push(Math.max(arr[i]));
//   secondElements = num.push(Math.max(arr[i - 1]));
// }
// console.log("maxSum: " + maxSum + " by " + num);

//ex3
// const array = [1, 7, 9, 2, 5, 3, 8];
// function twoSum(arr, target) {
//   const sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (target == arr[i] + arr[j]) sum.push([arr[i], arr[j]]);
//     }
//   }
//   return sum;
// }

// console.log(twoSum(array, 10));

//ex4
// const arr = [1, 2, 3, 4, 5, 5, 2, 3, 1, 6, 6, 7, 5];

// const unique = Array.from(new Set(arr)); //Array.from() tạo 1 array ko trùng lặp
// console.log(unique);

//ex5
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
// const arr2 = [3, 5, 9, 10, 88];

// const duplicate = arr1.filter((val) => {
//   return arr2.indexOf(val) != -1;
// });
// console.log(duplicate);

// const unique = Array.from(new Set(duplicate));
// console.log(unique);

//ex6
// const arr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
// // const result = {};
// // for (let i = 0; i < arr.length; ++i) {
// //   if (!result[arr[i]]) result[arr[i]] = 0;
// //   result[arr[i]]++;
// // }
// // console.log(result);

// let acc = arr.reduce(
//   (acc, val) => acc.set(val, 1 + (acc.get(val) || 0)),
//   new Map()
// );

// console.log(acc);

//ex7
// const arr = [
//   { make: "audi", model: "r8", year: "2012" },
//   { make: "audi", model: "rs5", year: "2013" },
//   { make: "ford", model: "mustang", year: "2012" },
//   { make: "ford", model: "fusion", year: "2015" },
//   { make: "kia", model: "optima", year: "2012" },
// ];
// const groupByCategory = arr.reduce((group, product) => {
//   const { make } = product;
//   group[make] = group[make] ?? [];
//   group[make].push(product);
//   return group;
// }, {});

// console.log(groupByCategory);

//ex8
const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  total_money: 0,
  total_amount: 0,
};
const product = order.cart;
const totalMoney = order.total_money;
const totalAmount = order.total_amount;
const initualValue = { amount: totalAmount, price: totalMoney };
console.log(order.cart);

const total = product.reduce((sum, initualValue) => {
  return {
    amount: sum.amount + initualValue.amount,
    price: sum.price + initualValue.price * initualValue.amount,
  };
}, initualValue);
console.log(total);
