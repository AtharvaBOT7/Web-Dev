console.log("Working");

// for (let i = 1; i <=10; i++){
//     console.log("Hello");
// }

// for (let i = 0; i<=10; i++){
//     console.log(i);
// }

// for (let i = 1; i<=6; i++){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// } // Output will be 1 2 3

// for (let i = 1; i<=6; i++){
//     if(i==4){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// } // Skip the current iteration, which means we will get an output of 1 2 3 5 6

// let i =1;

// while (i <= 10){
//     console.log("Hello");
//     i = i+1;
// }

// let i = 1;
// while (i < 5){
//     if (i == 3){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
//     i++;
// } // This while loop will be an infinite while loop because we have continued after the condition == 3, which means we will never update the value of i after 3.

// let i = 1;
// while (i < 5){
//     if (i == 3){
//         i++;
//         continue;
//     }
//     else{
//         console.log(i);
//     }
//     i++;
// } // This will work as expected and output 1 2 4

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

// let name = `This 
// is 
// backticks
// example
// for 
// multi-line
// strings`;

// let firstName = new String("Atharva Chundurwar");
// console.log(firstName);  // This will print [String: 'Atharva Chundurwar'] on the console.

// let a = "Hello ";
// let b = "World ";

// let c = a + b;
// console.log(c);

// let a = "Hello ";
// let b = "WoRld ";

// // let ans = `a + b`;
// // console.log(ans);   // This will print a + b in the console and not Hello World.

// // let ans2 = `${a} + ${b}`
// // console.log(ans2);  // This will print Hello  + World . because we have a space after hello string and the plus symbol will be printed as is/

// // console.log(`${a}${b}`); // This will print Hello World . with just 1 space in between.

// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());

// let str = "HELLOWORLDHOWAREYOU";
// console.log(str.substring(2));  // This will output LLOWORLDHOWAREYOU which means after the 2 character, print everything

// console.log(str.substring(2,10));   // This will output LLOWORLD. We do not include the character present on the 10th index ie the last index


let sentence = "Hello WOrld how are YOu?";
console.log(sentence.split(" "));