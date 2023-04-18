function solve() {
    let string = ''

    function append(str) {
       string += str
    }

    function removeStart(n) {
        string = string.slice(n)
        
    }

    function removeEnd(n) {
        string = string.slice(0, -n)
        
    }
    function print() {
        console.log(string)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solve()
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
