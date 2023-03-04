function solve(array1) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let element of array1) {
        element = element.split(' ')
        let catName = element[0]
        let catAge = element[1]

        let cat = new Cat(catName, catAge)
        cat.meow()

    }
}

solve(['Mellow 2', 'Tom 5'])