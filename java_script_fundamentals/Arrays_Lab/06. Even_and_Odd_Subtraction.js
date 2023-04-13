function solve(arr) {
    let oddSum = 0;
    let evenSum = 0;
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 !== 0) {
//         oddSum += arr[i]
//        }
//        else {
//         evenSum += arr[i]
//        }
//    }

   arr.map(x => x % 2 !== 0 ? oddSum += x : evenSum += x);

   let totalSum =  evenSum - oddSum;

   console.log(totalSum);
}

solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])

