function solve(input) {
    let heroes = [];
    for (let info of input) {
        info = info.split(' / ');

        heroes.push({
            heroName: info[0],
            heroLevel: info[1],
            heroItems: info[2],
        })
    }
    let sortedHeroes = heroes.sort((a, b) => a.heroLevel - b.heroLevel)

    for (let hero of sortedHeroes) {
        console.log([`Hero: ${hero.heroName} `, `level => ${hero.heroLevel}`, `items => ${hero.heroItems}`].join('\n'))
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )