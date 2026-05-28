// This is the syntax to create an object in JS, it is a collection of key and value pair. if we want to create a key with space in between then we will need to name it inside ""
// let obj = {
//     name: "Atharva",
//     "full name": "Atharva Chundurwar",
//     weight: 100,
//     height: "5ft 11inch",
//     age: 23,
//     greet: function() {
//         console.log("Hello I am Atharva Chundurwar");
//     }
// }

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));


// Array

// let arr = [1,2,3,4,5]
// console.log(arr);

// Array Constructor

// let arr1 = new Array (1,2,3,4,5, 'A', true, 3.298, "ATHARVA", `Hi 
//     Bye`);
// console.log(arr1);

// console.log(typeof(arr))
// console.log(typeof(arr1))

// let arr = [1,2,3,4,5]
// console.log(arr);

// arr.push(393);

// console.log(arr); // Outputs [1,2,3,4,5, 393]

// arr.pop()
// console.log(arr);

// arr.shift();
// console.log(arr);
// arr.unshift(12);
// console.log(arr);

// let arr = [1,2,3,4,5]
// console.log(arr);

// arr.unshift(183);
// arr.push(9);
// arr.push(90);
// arr.unshift(18);

// // console.log(arr);

// // console.log(arr.slice(2,5));  // 2 is the starting index and 4 is the ending index, we will not include 5 as that is excluded by the compiler so the output will be 1,2,3

// arr.splice(1,2,"Atharva");   // What this method will do is from the first index, we will take out the next 2 indices and insert "Atharva" in place of that.
// console.log(arr); 

// let arr = [10, 20, 30];

// let ans = arr.map((number) =>{
//     return number*number;
// })

// console.log(arr);
// console.log(ans);

// If we want to print it:

// let ans2 = arr.map((number) =>{
//     console.log(number + 1 );
// }) // This will run automatically.

// let ans3 = arr.map((number, index) =>{
//     console.log(number);
//     console.log(index);
// }) 

// let arr = [10, 20, 31, 32, 45, 90, 97, 103];

// arr.filter((number) => {
//     if (number%2 == 0){
//         console.log(number, ": is even");
//     }
//     else{
//         console.log(number, ": is odd");
//     }
// })

// let arr = [1, 2, "ABCD", 33, 9, true, "EFGH", false, -1, 83.30];

// let ans = arr.filter((value) => {
//     if (typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// let ans = arr.filter((value) => {
//     if (typeof(value) === 'number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// let ans = arr.filter((value) => {
//     if (typeof(value) === 'boolean'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);


// REDUCE METHOD

// let arr = [10,20,30,40];

// let ans = arr.reduce((acc, curr) =>{
//     return acc + curr;
// }, 0)
// // The value zero after the function initialization means that we have manually assigned the value to our accumulator.

// console.log(ans);


// SORT METHOD

// let arr = [12,4,5,45,5,39,9,1,-1]

// arr.sort();
// console.log(arr);

// console.log(arr.indexOf(45));

// let arr = [12,4,5,45,5,39,9,1,-1]

// arr.forEach((value, index) =>{
//     console.log("number: ", value, "index: ", index);
// })

// let len = arr.length;
// // console.log(len);


// // Traversing the array using for loop 
// for (let i = 0; i<len; i++){
//     console.log(arr[i]);
// }

// let arr = [12,4,5,45,5,39,9,1,-1]

// let obj = {
//     name: "Atharva",
//     "full name": "Atharva Chundurwar",
//     weight: 100,
//     height: "5ft 11inch",
//     age: 23,
//     greet: function() {
//         console.log("Hello I am Atharva Chundurwar");
//     }
// }

// for (let key in obj){
//     console.log(key, " ", obj[key]);
// }



// FOR OF LOOP
// let arr = [12,4,5,45,5,39,9,1,-1]
// for (let val of arr){
//     console.log(val);
// }

// let name = "ATHARVA CHUNDURWAR";
// for (val of name){
//     console.log(val);
// }


// FUNCITONS AND ANRRAYS

let arr = [10,20,30,40,50];

function getSum(arr){
    let len = arr.length;
    let sum = 0;
    for (let i = 0; i < len; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let ans = getSum(arr);
console.log(ans);