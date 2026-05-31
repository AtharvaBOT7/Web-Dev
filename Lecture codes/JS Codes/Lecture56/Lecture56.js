// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Atharva");
//     // resolved(10012); // This means that the promise was fulfilled.

//     reject(new Error("Internal Server Error"));  // This will throw an error in the console.
// });

// function sayMyName(){
//     console.log("Name is Atharva");
// }

// setTimeout(sayMyName, 10000);


// let firstPromise = new Promise((resolve, reject) => {
//     function sayMyName(){
//         console.log("Name is Atharva");
//     }

//     setTimeout(sayMyName, 10000);

//     resolve(1);    // If we forget to add this, then the function will never be resolved it will be in pending state only.
// });

// let promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if (success){
//         resolve("Promise Fulfilled");
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("Then block message is: " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// })

// promise1.then((message) => {
//     console.log("Then block message is: " + message);
//     return "Promise Fulfilled Second Message"
// }).then((message) => {
//     console.log(message);
//     return "Promise Fulfilled Third Message"
// }).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// }).finally((message) => {
//     console.log("I am finally, I will run everytime");
// })

let promise1 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 1000, "First");
})
let promise2 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 2000, "Second");
})
let promise3 = new Promise((resolve, reject)=> {
    setTimeout(reject, 4000, "Third");
})

Promise.all([promise3, promise2, promise1])
.then((values) => {
    console.log(values);
})
.catch((error)=> {
    console.error("error:" + error);
})