const mongoose = require('mongoose');
const CONNECTION_STR = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'test1';

const Pet = require("./models/pet");
async function connectDB() {
    try {
        await mongoose.connect(`${CONNECTION_STR}/${DATABASE_NAME}`);
        console.log(`You have be conected to database:${DATABASE_NAME}...`);
        // CREATE

        // ******** Variant1 **********
        // const newPet = new Pet({
        //     name: 'Lisko',
        //     age: 4,
        //     species: 'fox',
        //     color: 'orange'
        // })
        // newPet.save()

        // ====================================================

        // ********** Variant2 ***********
        // const newPet = await Pet.create({
        //     name: 'Roky',
        //     age: 14,
        //     species: 'dog',
        //     color: 'Black'
        // })

        // console.log(newPet);

        // READ

        // ********************************
        // const pets = await Pet.find();
        // pets.forEach(pet => {
        //     pet.hello();
        //     console.log(pet.description);
        //  });

        // const petId = "652e28ce7dfc403382f4792f"
        // const pets = await Pet.findById(petId);
        // const pets = await Pet.find({age: 9});
        // const pets = await Pet.findOne();
        // const pets = await Pet.findOne({age: 13});


        // UPDATE

        // Variant1
        // const updatePet = await Pet.updateOne({name: 'Roky'}, {age: 11})

        // Mongo DB syntax with dollar sign
        // const updatePet = await Pet.updateOne({name: 'Roky'}, { $set: {age: 10}})
        // ===========================================================================
        // Variant2
        // const petId = "6537227489c048273f09ba37";
        // const updatePet = await Pet.findById(petId);
        // updatePet.color = 'Red';
        // updatePet.age = 111;
        // updatePet.save();
        // ============================================================================
        // Variant3
        // If we wont validators work, we must set property runValidators to true
        // const petId = "652e28ce7dfc403382f4792f";
        // await Pet.findByIdAndUpdate(petId, {name: 'Fluffy'}, {runValidators: true});

        // DELETE

        // const petId = "6539b88eb46311d6d2f56bee";
        // ============================================================================
        // Variant1
        // await Pet.deleteOne({name: 'Lisko'})
        // ============================================================================
        // Variant2
        // await Pet.findByIdAndDelete(petId)

        const pets = await Pet.find();
        console.log(pets);
    } catch (error) {
        console.error('Database error connection', error);
    }
};

connectDB();