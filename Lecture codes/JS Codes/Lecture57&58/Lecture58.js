// Nested Functions

function outerFunction() {
  let name = "Noobie";

  function innerFunction() {
    console.log(name);
  }

return innerFunction;
}

let inner = outerFunction();

inner();