function painting(input){
    let paintBox = Number(input[0]) ;
    let rools = Number(input[1]) ;
    let glows = Number(input[2]);
    let brush = Number(input[3]);

    let numGlows = Math.ceil(0.35 * rools)
    let numBrush = Math.floor(0.48 * paintBox)

    let total = (paintBox * 21.50) + (rools * 5.20) + (glows * numGlows) + (brush * numBrush)

    let delivery = (total / 15).toFixed(2)

    console.log(`This delivery will cost ${delivery} lv.` )
}

painting(['10',
    '8',
    '2.2',
    '5'
    ])
