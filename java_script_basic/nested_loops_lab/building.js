function building(input) {
    let floor = Number(input[0]);
    let roomNumber = Number(input[1]);
  
    for (let f = floor; f >= 1; f--) {
        let buff = ''

        for (let r = 0; r < roomNumber; r++) {
            if (f === floor) {
                buff += `L${f}${r} `;

            } else if (f % 2 !== 0) {
                buff += `A${f}${r} `;

            } else {
                buff += `O${f}${r} `;

            }
        }
        console.log(buff)
    }
}

building(["6", "4"])