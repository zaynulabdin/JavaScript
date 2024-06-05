// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Zain Ul Abdin",
      lastname: "Lanagh",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "d", 4: "c" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 }; //OKAY
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 1,
    email: "z@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
  coursename: "Chai aur Javascript",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// JSON Talk

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];
