class Car {
    constructor(brand, model, year, speed) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = speed;
}


    printInfo() {
    return `${this.brand} ${this.model} (${this.year}) - Top Speed: ${this.speed} km/h`;
}
    accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} has sped up: The new speed is - ${this.speed} km/h`);
    }
}

const mercedes = new Car("Mercedes", "G-Class", 2020, 240);
const bmw = new Car("BMW", "M5", 2021, 250);
const ferrari = new Car("Ferrari", "488 GTB", 2022, 330);

console.log(mercedes.info()); 
console.log(bmw.info());      
console.log(ferrari.info());  

ferrari.accelerate(20); 