console.log("Working");

// function sayMyName() {
//     console.log("Atharva");
// }

// sayMyName()

// function countNum(i){
//     for (i; i < 10; i++){
//         console.log(i);
//     }
// }

// countNum(3);

// Return Functions
// function getSum(a,b,c){
//     let sum = a + b + c;
//     return sum;
// }

// let sum = getSum(10,11,12);
// console.log(sum);

// function getName(firstName, lastName){
//     let fullName = `${firstName} ${lastName}`;
//     return fullName;

//     // Unreachable Statements ie any code written after the return keyword will never be executed   
//     let a = 100;
//     let b = 10;
//     return a + b;
// }

// let fullName = getName("Atharva", "Chundurwar");
// console.log(fullName);


//  New way of function declaration

// function getMul(a,b){
//     return a*b;
// }

// let ans = getMul(8,9)
// console.log(ans);

// // The same function can be defined as follows

// let solve = function (a,b) { 
//     return a*b;
// }

// console.log(solve(3,4));


// Function definition using Arrow functions
function getExp1(x,y){
    return x**y;
}
console.log(getExp1(3,2));

let getExp = (x,y) =>{
    return x**y;
}
console.log(getExp(3,2));