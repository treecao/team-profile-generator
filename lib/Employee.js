//employee constructor
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email
    }
    //return email from input
    getEmail(){
        return this.email
    }
    //return name from input
    getName(){
        return this.name
    }
    //return ID from input
    getId(){
        return this.id
    }
    //return employee role from input
    getRole(){
        return "Employee"
    }
}

module.exports = Employee