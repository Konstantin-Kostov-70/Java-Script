function loadingBar(num) {
    let bar = "[" + "%".repeat(num / 10) + ".".repeat((100 - num) / 10) + "]";
    if (num < 100) {
      return `${num}% ${bar}\nStill loading...`;
    } else {
      return `100% Complete!\n${bar}`;
    }
  }

  console.log(loadingBar(30))