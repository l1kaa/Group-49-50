// 1) შექმენით Shape მშობელი კლასი, რომელსაც ექნება: 
// --- თვისებები --- 
// სოგრძე: Number, 
// სიგანე: Number, 
// ფერი: String 
// და კოორდინატები(სიის/მასივის სახით[x ; y]): Array

// --- მეთოდები --- 
// სიგრძის შეცვლა(გაზრდა/შემცირება), 
// სიგანის შეცვლა(გაზრდა/შემცირება), 
// ფერის შეცვლა,
// კოორდინატების შევლა,
// ფიგურის დახატვა - მეთოდი, რომელიც კონსოლზე დაბეჭდავს: 
// 'კოორდინატებზე - ${კოორდინატები} იხატება ფიგურა, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.

// --- --- --- --- --- ---
// შექმნეთი შვილეული კლასები - მაგ(Cirle, Rectangle, Triangle და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Shape კლასის თვისებებსა და მეთოდებს.
// --- --- --- --- --- ---
// შეუცვალეთ თითოეულ შვილეულ კლასს ფიგურის დახატვის მეთოდი, მაგ. Triangle კლასის შემთქვევაში, ფიგურის დახატვის მეთოდი კონსოლზე დაბეჭდავს:
// 'კოორდინატებზე - ${კოორდინატები} იხატება სამკუთხედი, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.


class Shape{
    constructor(length, width, color, coordinates){
        this.length = length;
        this.width = width;
        this.color = color;
        this.coordinates = coordinates;
    }

    increaseLength(amount){
        this.length = this.length + amount;
    }

    decreaseWidth(amount){
        this.width = this.width - amount;
    }

    changeColor(newColor){
        this.color = newColor;
    }

    changeCoordinates(newCoordinates){
        this.coordinates = newCoordinates;
    }

    drawShape(){
        console.log(`კოორდინატებზე - ${this.coordinates} იხატება ფიგურა, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია ${this.color}.`);
    };
};

class Triangle extends Shape{
    draw() {
        console.log(`კოორდინატებზე - ${this.coordinates} იხატება სამკუთხედი, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია ${this.color}.`);
    };
};

class Rectangle extends Shape {
    draw() {
    console.log(
        `კოორდინატებზე - ${this.coordinates} იხატება მართკუთხედი, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია ${this.color}.`);
    };
};

class Pentagon extends Shape {
    draw() {
    console.log(`კოორდინატებზე - ${this.coordinates} იხატება წრე, რომლის დიამეტრია ${this.length}, ფერია ${this.color}.`);
    };
};


let Shape1 = new Shape(30, 20, "წითელი", [4, 6])
console.log(Shape1.length);
Shape1.increaseLength(15);
console.log(Shape1.length);
Shape1.drawShape();
Shape1.decreaseWidth(5);
console.log(Shape1.width);
Shape1.changeColor("შავი");
console.log(Shape1.color);
Shape1.drawShape();
Shape1.changeCoordinates([5,7]);
console.log(Shape1.coordinates);
Shape1.drawShape();


let triangle1 = new Triangle(10, 20, "შავი", [3,9])
triangle1.increaseLength(10)
console.log(triangle1.length)

triangle1.draw()