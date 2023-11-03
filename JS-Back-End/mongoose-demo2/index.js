// [x] install mongoose and initialize then
// [x] initialize connection string
// [x] initialize database
// [x] connect to DB
// [x] create validators


const Warrior = require('./models/warrior')
const mongoose = require('mongoose');
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'test1';

async function connectDB() {
    try {

        await mongoose.connect(`${CONNECTION_STRING}/${DATABASE_NAME}`)
        console.log('Database is connected');
        //  ======== CREATE =============
        // const newWarrior = Warrior.create({
        //     name: 'Frodo',
        //     race: 'Hobbit',
        //     rank: 100,
        //     skills: {
        //         sword: 11,
        //         axe: 12,
        //         bow: 51,
        //         spell: 20
        //     }
        // })

        // const newWarrior = new Warrior({
        //     name: 'Legolas',
        //     race: 'elf',
        //     rank: 76,
        //     skills: {
        //         sword: 18,
        //         axe: 3,
        //         bow: 156
        //     }
        // });
        // newWarrior.save()

        // ========= UPDATE =============
        //  await Warrior.findByIdAndUpdate("6541b377372196cc8739a4dd", {rank: 1000});

        const warriors = await Warrior.find();
        console.log(warriors);
        warriors.forEach(warrior => warrior.Hura());
        warriors.forEach(warrior => console.log(warrior.addRank));

    } catch (error) {
        console.error(error);
    }
}

connectDB()