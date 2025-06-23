class PersianGuineaPig{
    constructor(color, size, year, month, day){
        this.color = color;
        this.size = size;
        this.year = year;
        this.month = month;
        this.day = day;
        this.birthDate = new Date(year, month - 1, day);
    }
    calculateAge(){
        const todaysDate = new Date();
        let years = todaysDate.getFullYear() - this.year;
        let months = todaysDate.getMonth() + 1 - this.month;
        let days = todaysDate.getDate() - this.day;

        if (days < 0) {
            months -= 1;
            const prevsMonth = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 0);
            days += prevsMonth.getDate(); 
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }
        console.log(`This Persian Guinea Pig is ${years} Years, ${months} Months and ${days} Days old.`);
        return { years, months, days };
    }
}

const pig1 = new PersianGuineaPig("black", "small", 2020, 10, 16)
pig1.calculateAge()