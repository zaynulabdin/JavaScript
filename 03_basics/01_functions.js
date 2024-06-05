function sayMyName() {
    console.log("Z");
    console.log("A");
    console.log("I");
    console.log("N");
  }
  
  // sayMyName();
  
  // function addTwoNumbers(number1, number2){
  //   console.log(number1 + number2);
  // }
  
  function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
  }
  
  const result = addTwoNumbers(3, 5);
  
  // console.log("Result: ", result);
  
  function loginUserMessage(username) {
    if (/*(username === undefined)*/ !username) {
      console.log("PLEASE Enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  
  // console.log(loginUserMessage("Zain"));
  console.log(loginUserMessage());
  