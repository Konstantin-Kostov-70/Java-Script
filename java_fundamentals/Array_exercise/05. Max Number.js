function findTopIntegers(arr) {
    let topIntegers = [];
    let maxSoFar = -Infinity;
    
    // loop through the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
      // check if the current element is greater than the max seen so far
      if (arr[i] > maxSoFar) {
        // if so, add it to the list of top integers and update the max seen so far
        topIntegers.push(arr[i]);
        maxSoFar = arr[i];
      }
    }
  
    // reverse the list of top integers so they appear in the original order
    topIntegers.reverse();
    console.log(topIntegers.join(' '));
  }

  findTopIntegers([1, 4, 3, 2]); 