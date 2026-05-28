// let obj = {
//     age: 89,
//     wt: 29,
//     ht: 74
// };

// let newobj = {
//     value: 4823,
//     name: "ATHARVA"
// }

// let obj3 = Object.assign({}, obj, newobj);

// console.log(obj3);

// console.log(obj);

// obj.color = "Green";

// console.log(obj);

// let obj2 = {...obj};

// console.log(obj2);

// obj2.age = 84;
// console.log(obj2);

// console.log(obj);


let obj = {
    age: 89,
    wt: 29,
    ht: 74
};

let obj2 = {};

for (let key in obj){
    let newKey = key;
    let value = obj[key];

    obj2[key] = value;
}
console.log(obj2);