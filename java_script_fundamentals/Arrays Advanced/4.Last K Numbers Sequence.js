function generateSequence(n, k) {
    let sequence = [1]; // The first element is always 1.
    for (let i = 1; i < n; i++) {
      let sum = 0;
      for (let j = i - 1; j >= i - k && j >= 0; j--) {
        sum += sequence[j];
      }
      sequence.push(sum);
    }
    console.log(sequence.join(" "));
  }

  generateSequence(6, 3)