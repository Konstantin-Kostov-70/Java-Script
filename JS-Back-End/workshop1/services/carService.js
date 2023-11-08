const Car = require('../models/Cars');
const Accessory = require('../models/Accessories');

function carModelView(car) {
    return {
        id: car._id,
        name: car.name,
        description: car.description,
        imageUrl: car.imageUrl,
        price: car.price
    }
}

function notCarImage(car) {
    if (car.imageUrl === '') {
        car.imageUrl = 'notFound3.png'
    }
    return car
}

async function getAll(query) {
    // with function lean() we take from DB simple js objects with out difficile mongoose functionality
    // const cars =  await Car.find().lean();
    const options = {}

    if (query.search) {
        options.name = new RegExp(query.search, 'i');
    }
    if (query.from) {
        options.price = { $gte: Number(query.from) };
    }
    if (query.to) {
        if (!options.price) {
            options.price = {};
        }
        options.price.$lte = Number(query.to);
    }

    const cars = await Car.find(options)
    return cars.map(carModelView)

};

async function getById(id) {
    const car = await Car.findById(id);
    if (car) {
        return carModelView(car);
    }
    else {
        return undefined;
    }
};

async function createCar(car) {
    const newCar = notCarImage(car)
    await Car.create(newCar)
}

async function deleteById(id) {
   await Car.findByIdAndDelete(id) 
};

async function editById(id, car) {
    const newCar = notCarImage(car)
    await Car.findByIdAndUpdate(id, car, {runValidators: true})
};

async function createAccessory(accessory) {
    await Accessory.create(accessory)
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createCar,
        deleteById,
        editById,
        createAccessory
    }
    next();
};

// This code is when we work with fs !!!!
// ***********************************
// const { json } = require('express');
// const fs = require('fs/promises');
// const filePath = './services/data.json';

// async function read() {
//     try {
//         const file = await fs.readFile(filePath);
//         return JSON.parse(file);
//     } catch (err) {
//         console.error('Database read error');
//         console.error(err);
//         process.exit(1);
//     }
// }

// async function write(data) {
//     try {
//         await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//     } catch (err) {
//         console.error('Database write error');
//         console.error(err);
//         process.exit(1);
//     }
// };

// function nextId() {
//     return 'xxxxxxxx-xxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
// }

// async function getAll(query) {
 
//     const data = await read();
//     let cars = Object
//         .entries(data)
//         .map(([id, v]) => Object.assign({}, { id }, v));
//     if (query.search) {
//         cars = cars.filter(c => c.name.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()));
//     }
//     if (query.from) {
//         cars = cars.filter(c => c.price >= Number(query.from))
//     }
//     if (query.to) {
//         cars = cars.filter(c => c.price <= Number(query.to))
//     }
// }

// async function getById(id) {

    // const data = await read();
    // const car = data[id];
    // if (car) {
    //     return Object.assign({}, { id }, car);
    // }
    // else {
    //     return undefined;
    // }
// };

// async function createCar(car) {
    
    // const cars = await read()
    // let id;
    // do {
    //     id = nextId()
    // } while (cars.hasOwnProperty(id));
    // cars[id] = car;
    // await write(cars);
// }

// async function deleteById(id) {

    // const data = await read();
    // if (data.hasOwnProperty(id)) {
    //     delete data[id];
    //     await write(data)
    // }
    // else {
    //     throw new ReferenceError('No such ID in database')
    // }
// };
// async function editById(id, car) {
//     const data = await read();
//     if (data.hasOwnProperty(id)) {
//         data[id] = car
//         await write(data)
//     }
//     else {
//         throw new ReferenceError('No such ID in database')
//     }
// };
