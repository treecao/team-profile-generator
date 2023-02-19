//run packages
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
let empArry = []
//start program executiont
const startProgram = () =>{
    inquirer.prompt ([
        {
            type: 'list',
            name: 'name',
            message: "Add more team members",
            choices: ["Add Engineer","Add Intern",]
            
        }
    ]).then(response => {
        console.log(response)
        switch(response.name) {
            case "Add Engineer":
                addIntern()
                break;
            case "Add Intern": 
                addIntern();
                break;
            default:
                 generateHTML()
            }
        }
    )
}

const addManager = () =>{
    inquirer.prompt ([
        // {
        //     type: 'input',
        //     name: 'name',
        //     message: "Add a Manager",
        // },
        {
            type: 'input',
            name: 'id',
            message: "Add an id number",            
        },
        {
            type: 'input',
            name: 'email',
            message: "Add an email address",
            
            
        },
        {
            type: 'input',
           name: 'office number',
            message: "Add an office number",
            
            
        }
    ]).then(response => {
        const newHire = new Manager(response.name,response.id,response.email,response.office)
        empArry.push(newHire)
        console.log(empArry);
        startProgram()
    })
}

addManager()