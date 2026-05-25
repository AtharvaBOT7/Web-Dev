console.log("Working");

// Arithmetic Operators
// let a = 10;
// let b = 9;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);
// console.log(a**b);

// console.log(a++); // a = 10; then after increment a = 11;
// console.log(a--);  // a = 11; then after decrement a = 10;

// console.log(a);


// console.log(5 == 5); // This will return true

// console.log('5' == 5); // This too will return true because loose equality checks only the value and not the data type

// console.log('5' === 5); //This will return false

// console.log(5 === 5); // This will return true

// console.log('5' != 5); // This will return false because when we use loose quality '5' and 5 are equal.

// console.log('5' !== 5); // This will return true because when we use strict quality '5' and 5 are not equal.

// let age = 85;
// let age = 5;
// let status = (age>15) ? "Vote" : "Cannot Vote"; 
// console.log(status);

// console.log(false || 'Atharva');   // Will return Atharva
// console.log(false || 5);           // Will return 5 
// console.log(false && 'Atharva')    // Will return false

// console.log(false || 5 || 4 || 'Helo' || 9);  // Will return 5 and not even check the further conditions 

// console.log(2 & 5); // Will return 0 because 2 is 010 and 5 is 101 and if we & bitwise, then we get 000
// console.log(2 | 5); // Will reutrn 7 because if we or 010 | 101, we get 111 which is 7.

// console.log(~0); // This we expect to return a value 1 but the thing is we assign the most significant bit as the sign, so we will see it as 1 and it means that it is a negative number and therefore we will get a value -1 as the answer and not 1. And we expect a big answer because every digit is 1 now, but remember to print negative numbers we use the method called 2's complement which means take 1's complement and add 1 to it. 1's complement means to flip the digits, therefore all the 1s will be flipped to 0 and just 1 will be added at the last, therefore the answer is -1.

// console.log(~1);  // 0001 -> 1110 -> 1's com -> 0001 -> 2's compl 0001 + 1 = 0010, therefore the answer will be -2.


// let age = 20;

// if (age > 18){
//     console.log("I am inside if, age more than 18");
// }
// else{
//     console.log("I am inside else, age less than 18");
// }

let num = 3;

switch (num){
    case 1: console.log('A');
    case 2: console.log('B');
    // default: console.log('C');
    case 3: console.log("I am 3");
    case 4: console.log('D');
    case 5: console.log('E');
} 
// Now this switch case, we would think will return a value of I am 3 but we have made a major mistake in the code and we will get the value I am 3 then D and then E as well as we have not used the break statement there.

switch (num){
    case 1: console.log('A'); break;
    case 2: console.log('B');break;
    // default: console.log('C');break;
    case 3: console.log("I am 3");break;
    case 4: console.log('D');break;
    case 5: console.log('E');break;
}