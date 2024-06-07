// 1

const user = {
    username: "Zain",
    price: 999,
  
    welcomeMessege: function () {
      console.log(`${this.username} , welcome to website`);
      // console.log(this);
    },
  };
  // user.welcomeMessege();
  // user.username = "Sam";
  // user.welcomeMessege();
  
  // console.log(this);
  
  // 2
  
  // function chai() {
  //   let username = "Zain";
  //   console.log(this.username);
  // }
  // chai();
  
  // const chai = function() {
  //   let username = "Zain"
  //   console.log(this.username);
  // }
  // chai()
  
  // 3
  
  const chai = () => {
    let username = "Zain";
    console.log(this);
  };
  // chai();
  
  // ++++++++++ Arrow function ++++++++++
  
  // () => {};
  
  // 1
  // const addTwo = (num1, num2) => {
  //   return num1 + num2;
  // };
  
  // console.log(addTwo(3, 4));
  
  // 2
  
  // const addTwo = (num1, num2) => num1 + num2;
  // console.log(addTwo(3, 4));
  
  // 3
  
  // const addTwo = (num1, num2) => (num1 + num2);
  
  // 4
  
  const addTwo = (num1, num2) => ({ username: "Zain" });
  console.log(addTwo(3, 4));
  
  // 5
  
  const myArray = [2, 5, 3, 7, 8];
  // myArray.forEach(function () {})
  // myArray.forEach(() => {})
  // myArray.forEach(() => ())