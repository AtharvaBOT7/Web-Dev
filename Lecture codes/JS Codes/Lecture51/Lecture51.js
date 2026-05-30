// // To prove that window is at the top of the hierarchy, if we go to a browser and paste:
// // console.log("Atharva");  // This will be printed without any issues but
// // window.console.log("ATharva");   // This will also be printed which means console is a child class of window class.

// // If we do the following commands after connected the HTML and JS files, then we will see the following outputs 
// document.getElementById("fpara")     // Outputs: <p id="fpara"> First Para</p>
// document.getElementById("fheading")  // Outputs: <h1 id="heading">First Heading</h1>

// document.getElementsByClassName("textMatter")   // Outputs: HTMLCollection(2) [p#fpara.textMatter, h1#heading.textMatter, fpara: p#fpara.textMatter, heading: h1#heading.textMatter]
//                                                 // If we observe carefully, then the output is in an array. and HTMLCollection(2) means that we have fetched 2 Classes.

// document.getElementsByTagName('p')              // Outputs: HTMLCollection(2) [p#fpara.textMatter, p#spara.textMatter, fpara: p#fpara.textMatter, spara: p#spara.textMatter]

// document.querySelector("#fpara")       // Outputs: <p id="fpara" class="textMatter"> First Para</p>

// // If we have multiple tags with the same class, then querySelector method will only return the tag which is at the top and will ignore the other tags.

// // Updating the exisitng values inside a HTML tag
// // If we do let button = $0 inside a browser console and then do button.innerHTML --> this will show all the HTML content that is present inside the button tag.

// //  How to set the values:
// // If we do button.innerHTML = '<p> HELLO WORLD </p>';  then we will see that inside the button tag, we will just have the p tag that we just inserted and nothing else.



// // HTML:
// // <button id="btn"> Click Me </button>

// // let button = document.querySelector("#btn");

// button.innerHTML  // → " Click Me "
// // gives you everything INSIDE the tag, not the tag itself

// button.outerHTML  // → "<button id="btn"> Click Me </button>"
// // gives you the element itself + everything inside it

// // Think of it like this:
// // ::innerHTML → looks inside the house, gives you the furniture
// // :: outerHTML → gives you the entire house including the walls

// // Setting values:

// // innerHTML replaces content INSIDE the tag
// button.innerHTML = "<p>Hello</p>";
// // result → <button id="btn"><p>Hello</p></button>
// // tag stays, only inside changes

// // outerHTML replaces the ENTIRE element including the tag itself
// button.outerHTML = "<p>Hello</p>";
// // result → <p>Hello</p>
// // the button is completely gone, replaced by p tag


let mydiv = document.querySelector("#mydiv");

let newElement = document.createElement('span');

newElement.textContent = "I am inside span tag";

// mydiv.insertAdjacentElement('beforebegin', newElement);      // This will insert the the newElement text content just before the next tag begins, outisde the next tag

// mydiv.insertAdjacentElement('afterbegin', newElement);      // This will insert the the newElement text content just after the next tag begins which means inside the next tag

// mydiv.insertAdjacentElement('beforeend', newElement);      // This will insert the the newElement text content at the end of the tag, but inside the same tag

mydiv.insertAdjacentElement('afterend', newElement);      // This will insert the the newElement text content at the end of the tag, outside the current tag

let child = document.querySelector("#fpara1");
let parent = child.parentElement;
// let parent = document.querySelector("#mydiv");
// let child = document.querySelector("#fpara1");

parent.removeChild(child);      // This remove the text "First"