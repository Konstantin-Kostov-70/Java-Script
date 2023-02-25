function solve(arr, targetSum) {
    let pairs = {};
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs[[arr[i], arr[j]]] = true;
        }
      }
    }
  
    for (let pair of Object.keys(pairs)) {
      console.log(pair.split(",").join(' '));
    }
  }

  solve ([1, 7, 6, 2, 19, 23],
    8
    )