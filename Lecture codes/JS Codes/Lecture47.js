// class Human {
//     // Properties

//     age;
//     #weight = 334;   // Private variable
//     height;

//     constructor(newAge, newHeight, newWeight){
//         this.age = newAge;
//         this.height = newHeight;
//         this.#weight = newWeight;
//     }

//     // Functions / Behaviours

//     walk(){
//         console.log("This human walks because he weights: ", this.#weight);     // Access private variable
//     } 

//     run(){
//         console.log("This human cannot run due to his weight. LOLOLOLOL HAHAHA");
//     }

//     get fetchWeight(){
//         return this.#weight;
//     }

//     set modifyWeight(val){
//         this.#weight = val;
//     }
// }

// let obj = new Human(89, 84, 48);
// console.log(obj.fetchWeight);


// // let newweight = obj.fetchWeight;

// // obj.modifyWeight(90);
// // obj.fetchWeight();

// // obj.walk();


// function sayName(myName = "default name"){   // Setting default parameters
//     console.log("My name is: ", myName);
// }

// sayName();

// sayName("Atharva");


