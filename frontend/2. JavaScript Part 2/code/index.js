// Sync vs Async

// Synchronous function
function syncFunction() {
  console.log("Hello");
  console.log("World");
}

// Asynchronous function
function asyncFunction() {
  setTimeout(() => {
    console.log("Hello ");
  }, 2000);
  console.log("World");
}

// Call the functions
syncFunction(); // Runs synchronously
asyncFunction(); // Runs asynchronously

/* Explanation:
- The syncFunction() executes synchronously, which means it runs from start to finish without waiting for any external processes.
- The asyncFunction()The code runs asynchronously, which means that some parts of the code may run later, while other parts continue to run.  */

// Callbacks

// Function that takes a callback
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

// Callback function
function callbackFunction() {
  console.log("Callback function called!");
}

// Call the functions
doSomething(callbackFunction);

/* Explanation:
- The doSomething() function takes a callback as an argument and calls it inside the function.
- The callbackFunction() is defined separately and passed as an argument to doSomething().
- When doSomething() is executed, it logs a message and then calls the callbackFunction().
- The callbackFunction() is executed after the doSomething() function has completed. */

// Promises
// create promiese
var promise = new Promise((resolve, reject) => {
  //here we put logic of the promise when its resolve and when it is rejected
});
// exemple

var promise2 = new Promise((resolve, reject) => {
  const a = 5;
  if (a === 5) {
    resolve("a is equal to 5");
  } else {
    reject("a is not equal to");
  }
});

// Function that returns a promise
function promiseFunction() {
  return new Promise((resolve, reject) => {
    console.log("Promise function: Step 1");
    setTimeout(() => {
      resolve("Promise function: Step 2");
    }, 1000);
  });
}

// Call the function using .then()
promiseFunction().then((result) => console.log(result));

/* Explanation:
- The promiseFunction() returns a promise that resolves after a 1-second delay. 
- The .then() method is used to handle the result of the promise. It takes a callback function as an argument that is executed when the promise is resolved.
- The promiseFunction() logs a message and then creates a new Promise that resolves with a message after a 1-second delay.
- When the promise is resolved, it returns the message as the result.
- The .then() method waits for the promise to resolve and then logs the result to the console. */

// catch methode
promise2
  .then((a) => {
    // here the then function will excute only if the promise is resolve and a is parameter that will get what ever we send me from the resolve function in this exemple a will recieve "a is equal 5"
    console.log(a);
  })
  .catch((a) => {
    // this catch function will catch any error or if the promisse is rejected the code inside catch will excute and  a is parameter that will get what ever we send me from the reject function in this exemple a will recieve "a is not equal"
    console.error(a);
  });

//multiple promisses

function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`we waited ${duration} ms`);
    }, duration);
  });
}
//this function take parameter duration and will wait until the duration is reached to resolve the promise

wait(1000)
  .then((a) => {
    console.log(a);
    return wait(2000);
  })
  .then((a) => {
    console.log(a);
  })
  .catch((e) => {
    console.error(e);
  });

// this is exemple of how we can use multiple promises

// Async/await

// Function that returns a promise
function asyncPromise() {
  return new Promise((resolve, reject) => {
    console.log("Async Promise function: Step 1");
    setTimeout(() => {
      resolve("Async Promise function: Step 2");
    }, 1000);
  });
}

// Async function that uses await
async function asyncFunction() {
  console.log("Async function: Step 1");
  const result1 = await asyncPromise();
  console.log(result1);
  const result2 = await asyncPromise();
  console.log(result2);
  console.log("Async function: Step 3");
}

// Call the function
asyncFunction();

/* Explanation:
- The asyncPromise() returns a promise that resolves after 
*/

// fetch from fake data api

// Using Promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Using async/await
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
