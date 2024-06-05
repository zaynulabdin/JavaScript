// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Zain",
  "full name": "Zain Ul Abdin",
  [mySym]: "mykey1",
  age: 22,
  location: "Karachi",
  email: "zain@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "zain@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "zain@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingtwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
