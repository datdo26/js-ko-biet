// const map = new Map([
//   ["firstName", "Luke"],
//   ["lastName", "Skywalker"],
//   ["occupation", "Jedi Knight"],
// ]);
// map.set("occupation", "Darth Vader");

// console.log(map);
//Map(3) {'firstName' => 'Luke', 'lastName' => 'Skywalker', 'occupation' => 'Darth Vader'}

// Add two unique but similar objects as keys to a Map

// const map = new Map();

// map.set({}, "One");
// map.set({}, "Two");
// const obj = {};
// console.log(map);
// // Map(2) {{…} => 'One', {…} => 'Two'}

// map.set(obj, "One");
// map.set(obj, "Two");

// console.log(map);
//Map(3) {{…} => 'One', {…} => 'Two', {…} => 'Two'}

// const objAsKey = { foo: "bar" };

// const map = new Map();

// map.set(objAsKey, "What will happen?");

// key: {
//   foo: "bar";
// }
// value: "What will happen?";
// console.log(map);
// // Map(1) {{…} => 'What will happen?'}

// Initialize a new Map
// const map = new Map([
//   ["animal", "otter"],
//   ["shape", "triangle"],
//   ["city", "New York"],
//   ["country", "Bulgaria"],
// ]);

// map.has("shark"); //false
// map.has("city"); //true

// console.log(map.get("animal"));
// //otter
// console.log(map.size);
// //4
// map.delete("city");
// console.log(map);
// // Map(3) {'animal' => 'otter', 'shape' => 'triangle', 'country' => 'Bulgaria'}

// const map = new Map([
//   [1970, "bell bottoms"],
//   [1980, "leg warmers"],
//   [1990, "flannel"],
// ]);

// console.log(map.keys());
// // MapIterator {1970, 1980, 1990}
// console.log(map.values());
// // MapIterator {'bell bottoms', 'leg warmers', 'flannel'}
// console.log(map.entries());
// // MapIterator {1970 => 'bell bottoms', 1980 => 'leg warmers', 1990 => 'flannel'}

// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
// // 1970: bell bottoms
// //  1980: leg warmers
// //  1990: flannel

// for (const [key, value] of map) {
//   // Log the keys and values of the Map with for...of
//   console.log(`${key}: ${value}`);
// }
// 1970: bell bottoms
//  1980: leg warmers
//  1990: flannel

//Set
// const set = new Set();

// set.add("Beethoven");
// set.add("Mozart");
// set.add("Chopin");
// set.add("Chopin");

// console.log(set);
// // Set(3) {'Beethoven', 'Mozart', 'Chopin'}

// const arr = [...set];
// console.log(arr);
// // (3) ['Beethoven', 'Mozart', 'Chopin']

// console.log(set.delete("Beethoven")); //true
// console.log(set.has("Beethoven")); //false
// console.log(set.clear()); //clear a set
// console.log(set.size); //0

// const set = new Set([1, 2, 3]);
// console.log(set.values());
// SetIterator {1, 2, 3}

const set = new Set(["hi", "hello", "good day"]);

set.forEach((value) => console.log(value));
//hi
//hello
//good day

for (const value of set) {
  console.log(value);
}
//hi
//hello
//good day
