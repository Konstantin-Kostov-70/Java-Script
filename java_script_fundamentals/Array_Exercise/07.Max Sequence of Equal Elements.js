function longestSequence(arr) {
    let currentSequenceLength = 1;
    let longestSequenceLength = 1;
    let longestSequenceStartIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        currentSequenceLength++;
      } else {
        if (currentSequenceLength > longestSequenceLength) {
          longestSequenceLength = currentSequenceLength;
          longestSequenceStartIndex = i - longestSequenceLength;
        }
        currentSequenceLength = 1;
      }
    }
  
    if (currentSequenceLength > longestSequenceLength) {
      longestSequenceLength = currentSequenceLength;
      longestSequenceStartIndex = arr.length - longestSequenceLength;
    }
  
    return arr
    .slice(longestSequenceStartIndex, longestSequenceStartIndex + longestSequenceLength)
    .join(' ');
  }