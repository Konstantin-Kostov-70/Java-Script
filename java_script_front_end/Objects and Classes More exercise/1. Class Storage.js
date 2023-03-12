class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storages = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        let currentCapacity = this.capacity - product.quantity
        if (currentCapacity >= 0) {
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
            this.storages.push(product);
        }
    }

    getProducts() {
        let json = []
        for (const product of this.storages) {
            json.push(JSON.stringify(product));
        }
        return json.join('\n');
    }
}


let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
