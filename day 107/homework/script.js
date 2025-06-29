// (...rest) ოპერატორი 
//rest ოპერატორს ვიყენებთ მაშინ, როდესაც ჩვენ გვინდა ობიექტიდან ან მასივიდან რამდენიმე მნიშვნელობის გამოყოფა და დანარჩენი მნიშვნელობების ერთ ცვლადში შენახვა
// rest გამოიყენება ფუნქციის პარამეტრებშიც, რათა მივიღოთ ბევრი არგუმენტი.

// (...spread) ოპერატორი 
// გამოიყენება ობიექტის ან მასივის "გაშლისთვის" - მაგალითად, ასლის შექმნისას ან შერწყმისას.


const person = {
    name1: "Lika",
    age: 17,
    height: 170
};

const { name1, ...rest } = person;

console.log(name1);  
console.log(rest); 



const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const merged = { ...obj1, ...obj2, ...obj3 };

console.log(merged); 


function printNames(...names) {
    names.forEach(name => console.log(name));
}

const namesList = ["Lika", "Saba", "Giorgi"];

printNames(...namesList);