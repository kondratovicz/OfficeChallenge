class Document {
    constructor(employer){
        this.EmployeeName = employer
    }
}

class Employee {
    constructor(name){
        this.name = name
    }

    work(office){
        for(let i=0; i<10; i++){
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager {
    constructor(name){
        this.name = name
        this.employees = []
    }

    hireEmployee(name){
        this.name = name
        this.employees.push(new Employee(name))
    }

    askEmployeesToWork(){
        this.employees.forEach(employee => employee.work())
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }
    clean() {
        console.log("Clean")
    }
}

class Office {
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name){
        this.cleaners.push(new Cleaner(name))
    }

    hireManager(name){
        this.managers.push(new Manager(name))
    }

    startWorkDay(){
        this.managers.forEach(manager => manager.askEmployeesToWork())
        this.cleaners.forEach(cleaner => cleaner.clean())
    }
}
