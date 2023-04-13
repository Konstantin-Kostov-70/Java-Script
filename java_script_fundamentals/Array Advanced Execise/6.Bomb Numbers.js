function detonateSequence(sequence, bomb) {
    let [specialNumber, power] = bomb;
    let sum = 0;
    
    while (sequence.indexOf(specialNumber) !== -1) {
      let index = sequence.indexOf(specialNumber);
      let startIndex = Math.max(0, index - power);
      let endIndex = Math.min(sequence.length - 1, index + power);
  
      sequence.splice(startIndex, endIndex - startIndex + 1);
    }
  
    for (let num of sequence) {
      sum += num;
    }
  
    return sum;
  }