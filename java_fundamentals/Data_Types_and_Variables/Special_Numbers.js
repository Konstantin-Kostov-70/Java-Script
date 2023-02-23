function sumDigits(n) {
    
    for (let i = 1; i <= n; i++) {
       let sum = 0;
       let current = i
       while (current) {
          let digit = current % 10;
          sum += digit;
          current = (current - digit) / 10;
       }

       res = sum  == 5 || sum  == 7 || sum == 11;

       console.log(res? `${i} -> True` : `${i} -> False`)

    }
    
}

sumDigits(20)