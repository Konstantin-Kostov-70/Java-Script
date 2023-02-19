function newFunc(input){
    let myDict = {'a': 1, 'b': 2, 'c': 3}
    let a = 'a'
    let b = Number(input[0])
    if (b < 10 && a in myDict){
        console.log('yes')
    } else {
        console.log('no')
    }
}
newFunc([1])