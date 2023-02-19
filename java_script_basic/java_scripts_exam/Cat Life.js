function cat(input){
    let cat = input[0];
    let gender = input[1];
    let live = 0
    let invalid = false

    if (cat === "British Shorthair"){
        if (gender === 'm'){
            live = 13
        } else {
            live = 14
        }
    } else if (cat === "Siamese"){
        if (gender === 'm'){
            live = 15
        } else {
            live = 16
        }
    } else if (cat === "Persian"){
        if (gender === 'm'){
            live = 14
        } else {
            live = 15
        }
    } else if (cat === "Ragdoll"){
        if (gender === 'm'){
            live = 16
        } else {
            live = 17
        }
    } else if (cat === "Ragdoll"){
        if (gender === 'm'){
            live = 16
        } else {
            live = 17
        }
    } else if (cat === "Ragdoll"){
        if (gender === 'm'){
            live = 16
        } else {
            live = 17
        }
    } else if (cat === "Ragdoll"){
        if (gender === 'm'){
            live = 16
        } else {
            live = 17
        }
    } else if (cat === "American Shorthair"){
        if (gender === 'm'){
            live = 12
        } else {
            live = 13
        }
    } else if (cat === "Siberian"){
        if (gender === 'm'){
            live = 11
        } else {
            live = 12
        }
    } else {
        invalid = true
        console.log(`${cat} is invalid cat!`)
    
    }

    if (invalid === false){
        let catMonth = live * 12 / 6
        console.log(`${catMonth} cat months`)
    }

 
}

cat(['Tom',
    'm'
    ])