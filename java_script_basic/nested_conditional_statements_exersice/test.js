function test(input){
    let num = Number(input[0])

    console.log(num % 60)
    console.log((num / 60).toFixed(0))
}

test(["308"])