class Employee{
    #id
    #salary
    constructor(id, firstName, lastName, salary){
        this.#id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.#salary = salary;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name) {
    const part = name.split(" ");
    this.firstName = part[0] || "";
    this.lastName = part[1] || "";
}

    get salary() {
        return `${this.name}'s yearly salary: ${this.#salary * 12}`;
    }

    set newSalary(newSalary){
        this.newSalary = newSalary;
        if (newSalary < 0){
            console.log("The salary must be greater than $0.")
        }
    }

    get newSalary(){
        return `${this.name}'s new salary is: ${this.newSalary}$`
    }

    get id(){
        return `${this.name}'s id: ${this.#id}`
    }
}

class Manager extends Employee{
    #departament
    constructor(name, salary, departament){
        super(name, salary)
        this.#departament = departament;
    }

    printInfo(){
        console.log(`Name of the employee: ${this.name}.`);
        console.log(`${this.#departament} departament`);
        console.log(`Salary amount: ${this.salary}$`)
    }
}

employee1 = new Manager("Dex", 1300, "Forensic blood spatter Analysis")
employee1.printInfo()