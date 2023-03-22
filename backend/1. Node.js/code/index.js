// nodejs basics

const sayHello = (person) => {
  console.log(`Hello ${person}`);
};

sayHello("Kamel");
sayHello("Amine");

// global object

setTimeout(() => {
  console.log("timeout");
}, 3000);
console.log(__dirname);
console.log(__filename);

// custom modules

const { sayHello } = require("./module.js");

sayHello();

// built in modules

const os = require("os");
console.log(os.platform(), os.homedir());
