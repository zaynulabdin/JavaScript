// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
  })();
  
  (() => {
    console.log(`DB CONNECTED TWO`);
  })();
  
  ((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
  })("Zain");
  