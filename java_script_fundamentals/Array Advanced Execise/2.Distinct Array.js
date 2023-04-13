function solve(arr) {

    let uniqueArr = arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    });

    console.log(uniqueArr.join(' '));

}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])