console.log("Hello, world!"); 
let message = "This is a JavaScript message.";
console.log(message); 

function greet(name) {//this is a function that takes a parameter
  return "Hello, " + name + "!";
}

let greeting = { //this is creating an object
  sayHi: function() {//this is teaching this object a method
    console.log("Hi!");
  },
  sayBye: function() {//this is teaching this object another method
    console.log("Bye!");
  },
  time: "morning"//a key : value can also be stored in an object
};
greeting.sayHi();
greeting.sayBye();

let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(i);
}
console.log(numbers);

function fib(n) {
  if (isFloat(n)) {
    return "Please enter a whole number."; 
  }
  else if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(20.5));

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
 let user = new Object();//initializing a new object with a constructor
user.name = "John";//obejctname.key = value
user.surname = "Smith";
user.age = 30;
user.isAlive = true;
user.sayHi = function() {
  console.log("Hello!");
};
user.sayHi();
console.log(user);