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
  
  function calculateCartPrice(...num1) {
    return num1;
  }
  
  // console.log(calculateCartPrice(200, 400, 500));
  
  const user = {
    username: "Zain",
    id: 199,
  };
  
  function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and ID is ${anyobject.id}`);
  }
  
  // handleObject(user);
  handleObject({
    username: "Awais",
    id: "110",
  });
  
  const myNewArray = [200, 100, 600, 400];
  
  function returnSecondValue(getArray) {
    return getArray[1];
  }
  
  // console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 400, 500, 1000]));