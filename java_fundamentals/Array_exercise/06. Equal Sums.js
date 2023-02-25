function findBalanceIndex(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((sum, num) => sum + num, 0);
  
    for (let i = 0; i < arr.length; i++) {
      rightSum -= arr[i];
  
      if (leftSum === rightSum) {
        return i;
      }
  
      leftSum += arr[i];
    }
  
    return "no";
  }