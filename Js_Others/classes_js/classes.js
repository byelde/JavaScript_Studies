class Car {
    constructor (value1, value2, value3) {
        this.brand = value1;
        this.model = value2;
        this.year = value3;
    }
    horn () {
        return `${this.model} makes Biiiiiiiiiiiiiiii`
    }

    unlock = () => {return `${this.model} is unlock.`}
}

const compass = new Car('Jeep','Compass', 2022)
console.log(compass.brand)
console.log(compass.model)
console.log(compass.year)
console.log(compass.horn())
console.log(compass.unlock())

console.log()

const creta = new Car('Hyunday', 'Creta', 2022)
console.log(creta.brand)
console.log(creta.model)
console.log(creta.year)
console.log(creta.horn())
console.log(creta.unlock())