function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(count);
    }
  
    return increment;
  }
  
  const counter = createCounter();
  counter(); // Output: 1
  counter(); // Output: 2
  