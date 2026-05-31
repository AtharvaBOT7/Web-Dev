// To create an Async function, we use the keyword async

// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside getData, setTimeout function")
//     }, 3000);
// }

// let output = getData();         // We see in browser console that we have received a promise in return.

// Await - ?

// Fetch API

// async function getData() {

//     // Get request -> Async in nature
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     // Pasring recevied JSON -> Async in nature
//     let data = await response.json()

//     console.log(data);
// }

// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// First way of doing:

// const myRequest = new Request("https://jsonplaceholder.typicode.com/posts", 
// {
//     method: "POST",
//     body: JSON.stringify({ username: "example" }),
//     headers: myHeaders,
// });

// const response = await fetch(myRequest);          // This is wrong because await keyword can only be used inside of async function

// Clean way of doing:

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Atharva Chundurwar" }),
    headers: myHeaders,
}

async function getData(){
    let response = await fetch(url);
    let data = await response.json()
    console.log("GET Data: ", data);
}

async function postData(){
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("POST Data: ", data);
}

async function processData(){
    await postData();
    await getData();
}

processData();     // This will not actually POST the data on placeholder website because we probably dont have the permissions to do that.