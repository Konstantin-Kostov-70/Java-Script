function solve(band, album, song) {
    let res = (album.length * band.length) * song.length / 2
    let rotations = Math.ceil(res / 2.5)

    console.log(`The plate was rotated ${rotations} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')