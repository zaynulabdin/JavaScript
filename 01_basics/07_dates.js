// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 5, 4);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 5, 4, 17, 2);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("06-14-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("defualt", {
  weekday: "long",
}); // to customization
