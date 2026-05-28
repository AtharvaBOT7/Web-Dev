// sayName("ATHARVA");

// function sayName(name) {
//     console.log(name);
// }

// sayName("ATHARVA");


// console.log(age);
// var age = 34;

// console.log(age);

// const obj1 = new Human();
// class Human {

// }

// const obj1 = new Human();


// function greetMe (greet, name) {
//     greet();
//     console.log("Hello ", name);
// }

// function greet(){
//     console.log("GREETINGS!!");
// }
// greetMe(greet, "ATHARVA");


// function solve(number){
//     return function(number){
//         return number * number;
//     }
// }

// let ans = solve(5);
// let final = ans(9);

// console.log(final);


const arr = [
    function(a,b){
        return a + b;
    },
    function(a,b){
        return a - b;
    },
    function(a,b){
        return a * b;
    }
];

let first = arr[0];
let firstans = first(4,9);
console.log(firstans);
