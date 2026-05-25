// var age = 25;  // This age variable is globally scoped

// if (true) {
//     console.log(age);
// }

// function solve(){
//     var age = 94; // This age variable is function scoped
//     console.log(age);
// }

// console.log(age);  // Should throw an error that age is not defiend.
// solve();

{
    let a = 10;
    console.log(a);  // This will work and output 10.
}

// console.log(a);  // This will throw an error that a is not defined.
// let a  = -9;     // This will throw an error that a cannot be redefined.

let b = 10;
b = 11; 
console.log(b);

const age = 99;
console.log(age);

// const age = 9;  // Not possible