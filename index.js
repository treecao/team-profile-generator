//run packages
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
let empArry = []
//start program executiont
const startProgram = () =>{
    inquirer.prompt ([
        {
            type: 'list',
            name: 'name',
            message: "Add more team members",
            choices: ["Add Engineer","Add Intern", "Done adding folks"] 
            
        }
    ]).then(response => {
        console.log(response)
        switch(response.name) {
            case "Add Engineer":
                addEngineer()
                break;
            case "Add Intern": 
                addIntern();
                break;
            case "Done adding folks": 
                buildTeam();
                break;
            default:
                 generateHTML()
            }
        }
    )
}

//close the loopy
const buildTeam = () =>{
    fs.writeFileSync('./dist/team.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    `)
    for (let index = 0; index < empArry.length; index++) {
//appending the employee info from the input 
    fs.appendFileSync('./dist/team.html', `
    <div>
            <p>Name: ${empArry[index].name}</p>
            <p>Title: ${empArry[index].getRole()}</p>
            <p>Id:  ${empArry[index].id}</p>
            <p>Email: ${empArry[index].email}</p>
        </div>
        <br>
    `)}
    fs.appendFileSync('./dist/team.html', `
    </body>
    </html>
    `)
}

//add manager
const addManager = () =>{
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Add a Manager",
        },
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
           name: 'officeNumber',
            message: "Add an office number",
            
            
        }
    ]).then(response => {
        const newHire = new Manager(response.name,response.id,response.email,response.officeNumber)
        empArry.push(newHire)
        console.log(empArry);
        startProgram()
    })
}

addManager()

// add engineer
const addEngineer = () =>{
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Add an Engineer",
        },
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
            name: 'github',
            message: "Add a Github username",
        }
    ]).then(response => {
        const newHire = new Engineer(response.name,response.id,response.email,response.github)
        empArry.push(newHire)
        console.log(empArry);
        startProgram()
    })
}

// add intern
const addIntern = () =>{
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Add an Intern",
        },
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
            name: 'school',
            message: "Add a School",
        }
    ]).then(response => {
        const newHire = new Intern(response.name,response.id,response.email,response.school)
        empArry.push(newHire)
        console.log(empArry);
        startProgram()
    })
}
