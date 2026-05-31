// Code 1: Brute force way to add 100 para tags using 100 reflows and 100 repaint operations.

const t1 = performance.now();

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para number: " + i;
    document.body.appendChild(para);
}
const t2 = performance.now();

console.log("Total time taken by code 1: " + (t2-t1));

// Code 2: Using the div tag to reduce the number of reflows and repaints to 1

const t3 = performance.now();

let mydiv = document.createElement('div')

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para number: " + i;
    mydiv.appendChild(para);    
}

document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Total time taken by code 2: " + (t4-t3));

// Code 2 is faster because of just 1 reflow and 1 repaint operation compared to 100 reflow and 100 repaint operations in code 1.


// Code 3: Using Document Fragment 

const t5 = performance.now();

let fragment = document.createDocumentFragment();

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para number: " + i;

    // NO REFLOWS OR REPAINTS ARE NEEDED TO ADD TO DOCUMENT FRAGMENT
    fragment.appendChild(para);
}

document.body.appendChild(fragment);

const t6 = performance.now();

console.log("Total time taken by code 3: " + (t6-t5));

// Both the code 2 and 3 are good practices because they both have just 1 reflow and 1 repaint operation.