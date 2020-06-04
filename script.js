let numCount = 10;
for (let i = 0; i < numCount; i++) {
    console.log(i);
};

numCount = 11;
for (let i = 1; i < numCount; i++) {
    console.log(i);
  };
for (let i = 0; i < numCount; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
  }

function printNumTill(n) {
    for (let i = 1; i < n+1; i++) { //vagy i <= n
      console.log(i);
    };
  };
  console.log(printNumTill(20));
/* or: */
let printNum = n => {
    for (let i = 1; i < n+1; i++) {
      console.log(i);
    };
  };
  console.log(printNum(15)); // or:
  printNum(5);

  function greeting(name) {
    console.log("Hello " + name);
  };
  console.log(greeting("Adam"));
/* or */
let greeter = name => {
    console.log(`Hello ${name}`);
  };
  greeter("Peter");
  greeter("Reka");
  greeter("Judit");

  let printValue = (list) => {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
  };
  printValue([1, 3, 5, 7]);

let myNumbers = [10, 20, 30, 50, 12];

// here we say, we want to do something with each item
myNumbers.forEach((number) => {
  // within the function I can tell what I want to do with the items
  console.log(number);
});
  