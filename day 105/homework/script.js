// გამოიყენე დესტრუქცია ისე, რომ მიიღო პირველი ორი ფერი ცვლადებში firstColor და secondColor

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;



// გამოიყენე დესტრუქცია name და country-ს გამოსატანად ცვლადებში
const user = {
    name: "Giorgi",
    age: 25,
    country: "Georgia"
};

const {name1, country1} = user;
console.log(name1);
console.log(country1);

// გამოიყენე დესტრუქცია და მიანიჭე default მნიშვნელობა "Unknown" ცვლადს country, თუ ის არ არსებობს
const person = {
    name: "Nino",
    age: 28
};

const { name: personName, age: personAge, country: personCountry = "Unknown" } = person;
console.log(personCountry);


const printUser = ({ name, age }) => {
    console.log(`${name} is ${age} years old`);
};

const userObj = { name: "Lika", age: 24 };
printUser(userObj);

// გამოიძახე ეს ფუნქცია ობიექტით და გამოიყენე დესტრუქცია პარამეტრებში

const numbers = [10, 20, 30, 40, 50];

// გამოიყენე დესტრუქცია ისე, რომ პირველი ელემენტი ცალკე მიიღო, ხოლო დანარჩენი rest მასივში

const student = {
    name: "Luka",
    marks: {
        math: 90,
        physics: 85
    }
};

const { marks: { math, physics } } = student;
console.log(math);  
console.log(physics);

// გამოიყენე დესტრუქცია ისე, რომ ცვლადებში მიიღო math და physics ქულები