//  შექმენით OrderManager კლასი, რომელსაც ექნება: 
//  --- თვისებები --- 
// ◽ activeOrders: Map - ობიექტის შექმნისას ცარიელი მაპი
// ◽ completedOrders: Set - ობიექტის შექმნისას ცარიელი სეტი
// ❔ activeOrders მაპი შეინახავს აქტიურ შეკვეთებს სადაც key იქნება orderId: Number, ხოლო value იქნება customerName: String
// ❔ completedOrders სეტი კი იმ მომხმარებლების სახელებს შეინახავს, რომლების შეკვეთებიც შევასრულეთ.
//  --- მეთოდები --- 
// ◽ processOrder(orderId, customerName, callback) 
// ◽ printStatus()
// ❔ printStatus მეთოდი კონსოლზე ბეჭდავს ყველა აქტიურ შეკვეთას(activeOrders) და ყველა დასრულებულ შეკვეთას(completedOrders). გამოიყენეთ ლუპი ანდა დესტრუქცია
// ❔ processOrder მეთოდი ქმნის შეკვეთას(ამატებს activeOrdersში), კონსოლზე გამოაქვს შეტყობინება, რომ ახალი შეკვეთა მივიღეთ და 3 წამით ამუშავებს შეკვეთას (setTimeout)
// ❔ setTimeout ის შიგნით:
//     1)ამოშალეთ შეკვეთა activeOrdersდან და მომხმარებლის სახელი შეინახეთ completedOrders სეტში 
//     2)გამოიძახეთ callBack ფუნქცია(დააბეჭდინეთ, რომ ესა და ეს შეკვეთა შესრულდა)
//     3)გამოიძახეთ printStatus მეთოდი
// ❔ callBack(orderId) ფუნქცია შექმენით კლასის გარეთ და შემდეგი რამ დააბეჭდინეთ კონსოლზე: 'შეკვეთა #${orderId} დამთავრდა'
//  ამის შემდეგ შექმენით OrderManager კლასის ობიექტი და გააკეთეთ რამოდენიმე შეკვეთა განსხავებული id და სახელებით

class OrderManager{
    constructor(activeOrders, completedOrders){
        this.activeOrders = activeOrders;
        this.completedOrders = completedOrders;
    }

    printStatus(){
        let arr = [...this.activeOrders]
        arr.map(item => {
            console.log(item[0], item[1]);
        });

        console.log();
        console.log(' <- completedOrders ->');
        console.log(...this.completedOrders);
        console.log();
    } 

    processOrder(orderId, customerName, callback){
        this.activeOrders.set(orderId, customerName);

        console.log('You have placed an order. To process the order, You must wait for 3 seconds.');
        this.printStatus();

        setTimeout(() => {
            console.log(customerName);
            this.completedOrders.add(customerName);
            this.activeOrders.delete(orderId);

            console.log('The order is done.');
            this.printStatus();

        }, 3000)
    }






}

const order1 = new OrderManager(new Map([[1, 'Lika'], [2, 'Luka'], [3, 'Nika']]), new Set(['Saba', 'Eelene', 'Mariami']));

order1.printStatus();
order1.processOrder(7, 'Nini');