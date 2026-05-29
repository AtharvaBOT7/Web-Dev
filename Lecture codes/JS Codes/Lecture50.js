// Try and catch error handling block in JS

// Just exectuing the below loc will give a runtime error because it is not yet defined.
// console.log(x);

// try{
//     console.log("Try block starts here");   // This print statement will be printed 
//     console.log(x);                         // This gives an error because x is not defined
//     console.log("Try block ends here");     // This statement will not be printed because we faced an error in the previous line and when we see an error, the parser will leave the try block and directly go to the catch block without executing any further code.
// }
// catch(e){      // e is the name of the error variable here. and we can print the error.
//     console.log("Variable not defined");
//     console.log("Error: ", e);
// }

// We also have a finally block in JS. The Finally Block of code will run everytime whether there is an error or not.

// try{
//     console.log("Try block starts here"); 
//     console.log(x);
// }
// catch(e){
//     console.log("Error: ", e);
// }
// finally{
//     console.log("I am finally, I will execute everytime");
// }

// We can also throw or own custom errors, we can do that using the throw keyword.


try{
    console.log(x);
}
catch(e){
    throw new Error("First reference the variable and then try to use it.");
}
finally{
    console.log("I am finally, I will execute everytime");
} // In this code, the finally block output is not shown because what is happening is the error crashes the node process and the it is so fast that there is no time for the finally block to get executed therefore we dont see the output of the finally block.