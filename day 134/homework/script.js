// შექმენით სამი Promise:

//  ▪getProduct – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 1 წამში,
//  ▪getUser – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 2 წამში,
//  ▪getPayment – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 3 წამში.
// გამოიყენეთ Promise.all, რათა მიიღოთ ყველა მონაცემი ერთად.
// თუ რომელიმე ჩაიჭრება(გააკეთეთ ისე, რომ პრომისებმა რანდომულად ან დარეჯექდნენ ან დარეზოლვდნენ), 
// მთლიანი ოპერაცია უნდა გადავიდეს catch‑ში და გამოიტანოს "შეკვეთის დამუშავება ჩაიშალა".

function isEven() {
    const randomNum = Math.floor(Math.random() * 70)
    return randomNum % 2 === 0; 
}


function getProduct() {
    return new Promise((resolve, reject) => {
        console.log("Getting information about the product...");

        setTimeout(() => {
            const info = { status: "In stock", amount: 200 };
            if (isEven()) {
                resolve(info);
            } else {
                reject("Could not find the product.");
            }
        }, 1000);
    });
}

function getUser() {
    return new Promise((resolve, reject) => {
        console.log("Getting information about the user...");

        setTimeout(() => {
            const info = { name: "Lika", id: 1234 };
            if (isEven()) {
                resolve(info);
            } else {
                reject("Could not find the user.");
            }
        }, 2000);
    });
}

function getPayment() {
    return new Promise((resolve, reject) => {
        console.log("Getting information about the payment...");

        setTimeout(() => {
            const info = { method: "Credit Card", status: "Approved" };
            if (isEven()) {
                resolve(info);
            } else {
                reject("Payment info could not be retrieved");
            }
        }, 3000);
    });
}


Promise.all([getProduct(), getUser(), getPayment()])
    .then(res => {
        console.log(`All data received successfully: ${res}`);
    })
    .catch(error => {
        console.log("Order proccessing has failed");
        console.error(error);
    });




// შექმენით 'უნივერსალური API':

//  ▪პრომისი - getWeather - არეზოლვებს რანდომულ ამინდის ემოჯის ან არეჯექთებს: 'No info'
//  ▪პრომისი - getCurrency - არეზოლვებს დოლარის კურს(HardCode - 2.7) ან არეჯექთებს: 'No info'
//  ▪პრომისი - getNews - არეზოლვებს რაღაცა სიახლეს ან არეჯექთებს: 'No info'
// გამოიყენეთ Promise.allSettled, რომ მიიღოთ ყველა პრომისის შედეგი/პასუხი.
// კონსოლში უნდა გამოიტანოთ თითოეული {status, value} ან {status, reason}.


const randomIcons = ['☁️','☀️','⛅','🌦️','⛈️','🌧️']

function getWeather() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * (randomIcons.length + 1)); 
        if (randomIcons[randomNum]) {
            resolve(randomIcons[randomNum]); 
        } 
        else {
            reject('No info'); 
        }
    });
}


function getCurrency() {
    return new Promise((resolve, reject) => {
        if (isEven()) {
            resolve(2.7); 
        } 
        else {
            reject('No info');
        }
    });
}

function getNews() {
    return new Promise((resolve, reject) => {
        if (isEven()) {
            resolve('The new Gpt 5 has just been released.'); 
        } 
        else {
            reject('No info');
        }
    });
}

Promise.allSettled([getWeather(), getCurrency(), getNews()])
    .then(res => {
        res.forEach((res, status) => {
            console.log(status, res);
        });
    });

// შექმენით უნივერსალური ფუნქცია:

//  ▪fakeServer(serverName)
// ფუნქციის შიგნით დააგენერეითეთ:
//  ▪0 ან 1 და შეინახეთ იგი willResolve ცვლადში
//  ▪რიცხვი 100 დან 4000 და შეინახეთ იგი time ცვლადში
// ამ ფუნქციამ უნდა დააბრუნოს პრომისი, რომელიც დააბრუნებს პასუხს time დროში.
// პრომისი დაარეზოლვებს received data from ${serverName} in ${time}ms იმ შემთხვევაში თუ willResolve === 1
// თუ willResolve === 0 პრომისი დაარეჯექთებს რაიმე ერორს.
// გამოიყენეთ Promise.any და მის შიგნით რამდენჯერმე გამოიძახეთ შექმნილი ფუნქცია.
// თუ ყველა ჩავარდება, დაიჭირეთ AggregateError და გამოიტანეთ ყველა ჩავარდნის მიზეზი .errors მასივით.

function fakeServer(serverName){
    const willResolve = Math.floor(Math.random() * 2);
    const time = Math.floor(Math.random() * 1000);
    console.log('hbsib:', time);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(willResolve === 1){
                resolve(`received data from ${serverName} in ${time}ms`)
            }
            else{
                reject('could not get the info.')
            }
        }, time)

    });
};

