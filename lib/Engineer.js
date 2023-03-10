// import Employee constructor
const Employee = require("./Employee")

// Engineer constructor extend Employee constructor
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github
    }
    //return github from input
    gitGithub() {
        return this.github
    }
    //override Employee role to Engineer
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer