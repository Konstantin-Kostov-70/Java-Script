function solve(input) {
   const num = input.shift();
   let allHeroes = {}
   for (let index = 0; index < num; index++) {
      let [name, hp, mp] = input.shift().split(' ')
      allHeroes[name] = {
        hp: Number(hp),
        mp: Number(mp)
      }
   }
   
   for (let line of input) {
     if (line === 'End') {
        break
     }
      let commands = line.split(' - ')
      let command = commands[0]
      let hero = commands[1]

      switch(command) {
        case 'CastSpell':
            let spellMP =Number(commands[2])
            let spell = commands[3]
        if (allHeroes[hero]['mp'] - spellMP >= 0) {
            allHeroes[hero]['mp'] -= spellMP
            console.log(`${hero} has successfully cast ${spell} and now has ${allHeroes[hero]['mp']} MP!`)
        }
        else {
            console.log(`${hero} does not have enough MP to cast ${spell}!`)
        }
            break
        case 'TakeDamage':
            let damage = Number(commands[2])
            let attacker = commands[3]
            if (allHeroes[hero]['hp'] - damage <= 0) {
                delete allHeroes[hero]
                console.log(`${hero} has been killed by ${attacker}!`)
            }
            else {
                allHeroes[hero]['hp'] -= damage
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${allHeroes[hero]['hp']} HP left!`)
            }
            break
        case 'Recharge':
            let mpAmount = Number(commands[2])
            let neededMp = 0
            if(allHeroes[hero]['mp'] + mpAmount > 200) {
                neededMp = 200 - allHeroes[hero]['mp']
                allHeroes[hero]['mp'] = 200
            }
            else {
                allHeroes[hero]['mp'] += mpAmount
                neededMp = mpAmount
            }
            console.log(`${hero} recharged for ${neededMp} MP!`)
            break
        case 'Heal':
            let hpAmount = Number(commands[2])
            let neededHp = 0
            if (allHeroes[hero]['hp'] + hpAmount > 100) {
                neededHp = 100 - allHeroes[hero]['hp']
                allHeroes[hero]['hp'] = 100
            }
            else {
                allHeroes[hero]['hp'] += hpAmount
                neededHp = hpAmount
            }
            console.log(`${hero} healed for ${neededHp} HP!`)
            break
      }
   }

   for (hero in allHeroes) {
    console.log(hero)
    console.log(`  HP: ${allHeroes[hero]['hp']}`)
    console.log(`  MP: ${allHeroes[hero]['mp']}`)
   }
}

solve([4,
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