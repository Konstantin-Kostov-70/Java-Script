function solve(input) {
    const num = input.shift()
    const allHeroes = {}
    for (let index = 0; index < num; index++) {
        let [hero, hp, mp] = input.shift().split(' ')
        allHeroes[hero] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    for (let line of input) {
        if (line === 'End') {
            break
        }
        line = line.split(' - ')
        let command = line[0]
        let hero = line[1]

        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(line[2])
                let spellName = line[3]
                if (allHeroes[hero]['mp'] - mpNeeded >= 0) {
                    allHeroes[hero]['mp'] -= mpNeeded
                    console.log(`${hero} has successfully cast ${spellName} and now has ${allHeroes[hero]['mp']} MP!`)
                }
                else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`)
                }
                break
            case 'TakeDamage':
                let damage = Number(line[2])
                let attacker = line[3]
                if (allHeroes[hero]['hp'] - damage > 0) {
                    allHeroes[hero]['hp'] -= damage
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${allHeroes[hero]['hp']} HP left!`)
                }
                else {
                    delete allHeroes[hero]
                    console.log(`${hero} has been killed by ${attacker}!`)
                }
                break
            case 'Recharge':
                let hmNeeded = 0
                let amount = Number(line[2])
                if (allHeroes[hero]['mp'] + amount > 200) {
                    hmNeeded = 200 - allHeroes[hero]['mp']
                    allHeroes[hero]['mp'] = 200
                }
                else {
                    hmNeeded = amount
                    allHeroes[hero]['mp'] += amount
                }
                console.log(`${hero} recharged for ${hmNeeded} MP!`)
                break
            default:
                let hpNeeded = 0
                let hpAmount = Number(line[2])
                if (allHeroes[hero]['hp'] + hpAmount > 100) {
                    hpNeeded = 100 - allHeroes[hero]['hp']
                    allHeroes[hero]['hp'] = 100
                }
                else {
                    hpNeeded = hpAmount
                    allHeroes[hero]['hp'] += hpAmount
                }
                console.log(`${hero} healed for ${hpNeeded} HP!`)
                break
        }
    }
    for (let hero in allHeroes) {
        console.log(hero)
        console.log(`  HP: ${allHeroes[hero]['hp']}`)
        console.log(`  MP: ${allHeroes[hero]['mp']}`)
    }
}

solve([
    '4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'

])