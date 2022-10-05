// // cách 1:
// function getJSON() {
//     // To make the function blocking we manually create a Promise.
//     return new Promise(function (resolve) {
//         axios
//             .get("https://tutorialzine.com/misc/files/example.json")
//             .then(function (json) {
//                 // The data from the request is available in a .then block
//                 // We return the result using resolve.
//                 resolve(json);
//             });
//     });
// }
// // cách 2:
// // Async/Await approach

// // The async keyword will automatically create a new Promise and return it.
// async function getJSONAsync() {
//     // The await keyword saves us from having to write a .then() block.
//     let json = await axios.get(
//         "https://tutorialzine.com/misc/files/example.json"
//     );

//     // The result of the GET request is available in the json variable.
//     // We return it just like in a regular synchronous function.
//     return json;
// }

// getJSONAsync().then(function (result) {
//     // Do something with result.
//     console.log("result", result);
// });

const people = [
    { name: "Alice", age: 21 },
    { name: "Max", age: 20 },
    { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
    return objectArray.reduce((element, obj) => {
        const key = obj[property];
        const curGroup = element[key] ?? [];

        return { ...element, [key]: [...curGroup, obj] };
    }, {});
}

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
