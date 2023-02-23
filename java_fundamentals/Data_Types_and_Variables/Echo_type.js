function echo(text) {

    if (typeof text == 'string' || typeof text == 'number') {

        console.log(typeof text)
        console.log(text)
    }
    else {
        console.log('object')
        console.log('Parameter is not suitable for printing')
        
    }
}

echo(null)