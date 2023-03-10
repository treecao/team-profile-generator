// import Employee constructor
const Employee = require("./Employee")

// Manager constructor extends Employee constructor
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber
    }
    gitGithub() {
        return this.officeNumber
    }
    //override employee role to manager
    getRole(){
        return "Manager"
    }
}
module.exports = Manager