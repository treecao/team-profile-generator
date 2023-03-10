// import Employee constructor
const Employee = require("./Employee")

// Intern constructor extend Employee constructor
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school
    }
    //return school from input
    gitGithub() {
        return this.school
    }
    //override role to Intern
    getRole(){
        return "Intern"
    }
}
module.exports = Intern