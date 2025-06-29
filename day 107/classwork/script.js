// 1) შექმენით ფუნქცია, რომელსაც გადაეცემა n რაოდენობის რიცხვი, ამ ფუნქციამ უნდა დააბრუნოს გადაცემული რიცხვების ჯამი. გამოიძახეთ ის რამოდენიმეჯერ და ყოველ ჯერზე არგუმენტად გადაეცით სხვადასხვა რაოდენობის რიცხვი.

const sumOfNums = (...numbers) => {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += i;
}
}
console.log(sumOfNums(1, 2, 3, 4, 5))
console.log(sumOfNums(27, 25, 113))

// 2) შექმენით 2 ობიექტი, მინიმუმ 2 კუთვნილებით. შემდეგ კი შექმენით ახალი ობიექტი, სადაც spread ოპერატორის გამოყენებით ჩააკოპირებთ ორივე ობიექტის კუთვნილებებს

const obj = {
    name: "Lika",
    surname: "Chkhikvadze"
};

const obj2 = {
    name: "Luka",
    surname: "Tskhvaradze"
}

const both = {
    ...obj,
    ...obj2
}

// 3) მსგავსი დავალება გაიმეორეთ სიებზეც

const arr = [10, 20, 30, 40, 50]

const arr2 = [5, 10, 15, 20, 25]

const both2 = [...arr, ...arr2]