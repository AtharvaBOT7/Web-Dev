// // let fpara = document.querySelector("#fpara");
// // fpara.textContent = "Hello Atharva";

// function changeText(event){
//     console.log(event);
//     let fpara = document.querySelector("#fpara");
//     fpara.textContent = "Hello Atharva";
// }

// let fpara = document.querySelector("#fpara");

// fpara.addEventListener('click', changeText);

// // fpara.removeEventListener('click', changeText);

// let anchorElement = document.querySelector("#fanchor");

// function anchorEvent(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click Done";
// }

// anchorElement.addEventListener('click', anchorEvent);

// let paras = document.querySelectorAll('p');

function alertPara(){
    if (event.target.nodeName === "SPAN"){
        alert("You have clicked on para: " + event.target.textContent);
    }
        // alert("You have clicked on para: " + event.target.textContent);  // This will print the text content that is present inside the respective p tag. Target means on which element we have clicked.
    }

// for (let i = 0; i < paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara);
// };

let mydiv = document.querySelector("#wrapper");

document.addEventListener('click', alertPara);