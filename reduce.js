// ttính tổng
const a = [1, 2, 3];
const sum = a.reduce((prevValue, curValue) => {
    const total = prevValue + curValue;
    return total;
});
console.log(sum); //6

//flat arrray
const arr = [
    [0, 1],
    [2, 3],
    [3, 4],
];
const flatArr = arr.reduce((prevValue, curValue) => {
    const flatted = prevValue.concat(curValue);
    return flatted;
});

console.log(flatArr); //[0, 1, 2, 3, 3, 4]

//đếm số lần xuất hiện của giá trị
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedName = names.reduce((allNames, name) => {
    const curCount = allNames[name] ?? 0;
    return {
        ...allNames,
        [name]: curCount + 1,
    };
}, {});
console.log(countedName); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

//nhóm object theo thuộc tính
const people = [
    { name: "Alice", age: 21 },
    { name: "Max", age: 20 },
    { name: "Jane", age: 20 },
];

const groupBy = (objectArray, property) => {
    return objectArray.reduce((element, obj) => {
        const key = obj[property];
        const curGroup = element[key] ?? [];

        return { ...element, [key]: [...curGroup, obj] };
    }, {});
};

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// 20
// {name: 'Max', age: 20}
// {name: 'Jane', age: 20}
// 21
// {name: 'Alice', age: 21}

//loại các phần tử lặp
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const myArrayNoDup = myArray.reduce((prevValue, curValue) => {
    if (!prevValue.includes(curValue)) {
        return [...prevValue, curValue];
    }
    return prevValue;
}, []);

console.log(myArrayNoDup); //['a', 'b', 'c', 'e', 'd']
