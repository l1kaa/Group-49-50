// 1️⃣ დაწერე სამი Promise, რომლებიც აბრუნებენ "Step 1", "Step 2", "Step 3" თითოეული 1 წამიანი დაყოვნებით. თითოეული უნდა შესრულდეს მხოლოდ მაშინ, როცა წინა დასრულდება. გამოიყენე მხოლოდ then() ჩეინინგი.

const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1");
        }, 1000);
    });
    };

const step2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2");
        }, 1000);
    });
    };

const step3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 3");
        }, 1000);
    });
    };


step1()
    .then((res1) => {
        console.log(res1); 
        return step2();
    })
    .then((res2) => {
        console.log(res2); 
        return step3();
    })
    .then((res3) => {
        console.log(res3);
    });



// 2️⃣ შექმენი Promise, რომელიც აბრუნებს რიცხვს (მაგ. 2). შემდეგი then()-ებში გაამრავლე ეს რიცხვი ჯერ 2-ზე, შემდეგ მიღებული შედეგი 3-ზე, შემდეგ 4-ზე. ბოლო then()-ში დაბეჭდე საბოლოო შედეგი

let num = 4
const getNum = new Promise((resolve, reject) => {
    resolve(num);
});

getNum
    .then((num) => {
        return num * 2
    })
    .then((num) => {
        return num * 3
    })
    .then((num) => {
        return num * 4
    })
    .then((finalRes) => {
        console.log(`Final result: ${finalRes}`)
    });


// 3️⃣ დაწერე Promise, რომელიც 2 წამის შემდეგ აბრუნებს მომხმარებლის სახელს (მაგ. "Gio"). შემდეგ then()-ში დააბრუნე ტექსტი "Hello, Gio!" და ბოლოს დაბეჭდე ეს ტექსტი

let name = 'Lika'
const getName = new Promise((resolve) => {
    setTimeout(() => {
        resolve(name);
    }, 2000)
    
});

getName
    .then((name) => {
        console.log(`Hello, ${name}!`) 
    });
