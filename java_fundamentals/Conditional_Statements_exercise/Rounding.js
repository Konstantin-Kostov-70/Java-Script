function numberToPrecision(number, precision) {
    if (precision > 15) {
      precision = 15;
    }
  
    let roundedNumber = Number(number.toFixed(precision));
    let formattedNumber = parseFloat(roundedNumber);
  
    console.log(formattedNumber);
  }

  numberToPrecision(10.5,3)



