function solve(array) {
    let parking = new Set();

   array.forEach(carInfo => {
      carInfo = carInfo.split(', ');
      let inOrOut = carInfo[0];
      let carNum = carInfo[1];

      switch (inOrOut) {
        case 'IN':
            parking.add(carNum)
            break;
      
        default:
            parking.delete(carNum)
            break;
      }
   });

   if (parking.size !== 0) {
       let sortParking = Array.from(parking.values()).sort()
       console.log(sortParking.join('\n'));
   }
   else {
    console.log('Parking Lot is Empty')
   }

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

console.log('-------------------------------')

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)