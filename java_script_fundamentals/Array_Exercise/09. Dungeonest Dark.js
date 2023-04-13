function dungeon(array1) {
    let rooms = array1.join('').split('|');
    let health = 100;
    let coins = 0;
    let youDied = false

    for (let index = 0; index < rooms.length; index++) {
        let currentRoom = rooms[index].split(' ');
        let itemOrEnemy = currentRoom[0];
        let points = currentRoom[1];
        

        switch (itemOrEnemy) {
            case 'potion':
               
                if ( health + Number(points) > 100) {
                    points = 100 - health;
                    health = 100;
                }
                else{
                    health += Number(points);
                }
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                coins += Number(points);
                console.log(`You found ${points} coins.`);
                break;

            default:
                health -= Number(points);
                if (health <= 0) {
                    console.log(`You died! Killed by ${itemOrEnemy}.` )
                    console.log(`Best room: ${index + 1}`)
                    youDied = true
                    break;
                    
                }
                else {
                    console.log(`You slayed ${itemOrEnemy}.`);
                }
        }

        if (youDied) {
            break;
        }

    }

    if (!youDied) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
    
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])