//  Primitives 7 Types :
// String, Number, Boolean, null, undefined, Symbol, BigInt,

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // typeof "Object"
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);  // false

const bigNumber = 2132343434343654677576n // n represents BigInt and the typeof BigInt is "undefined"

//  Reference (non-primitive) : Array, Objects, Functions

const heros = ["spiderman", "superman", "ironman"] // Array

let myObj = {
  name: "zain",
  age: "22",
} // Object

// function(){}
const myFunction = function(){
  console.log("Hello World");
};

// +++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "zain";

let anotherName = "langah";
anotherName = "zain langah";

console.log(myName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  id: "764cdv435",
};

let usertwo = userOne;

usertwo.email = "zain@google.com";

console.log(userOne.email);
console.log(usertwo.email);
