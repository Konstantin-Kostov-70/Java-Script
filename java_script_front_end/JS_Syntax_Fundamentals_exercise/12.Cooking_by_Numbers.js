function solve(...other){
    let array1 = [...other];
    let elem = Number(array1.shift());

    for(x of array1) {
        switch (x){
            case 'chop':
                elem /= 2;
                console.log(elem);
                break;

            case 'dice':
                elem = Math.sqrt(elem);
                console.log(elem);
                break;

            case 'spice':
                elem++;
                console.log(elem);
                break;

            case 'bake':
                elem *= 3;
               console.log(elem);
               break;

            case 'fillet':
                elem *= 0.80;
                console.log(elem);
                break;
        }
    }

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


