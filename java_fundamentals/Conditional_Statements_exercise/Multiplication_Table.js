function multi(num){
    for (let i = 1; i <= 10; i++) {
        let total = num * i
        console.log(`${num} X ${i} = ${total}`)
    }
}

multi(5)