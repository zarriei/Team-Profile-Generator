const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const generateTeamPage = require("./src/generateTeamPage");


// inherent classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const team = [];



const init = async () => {
    await employeeInfo()
        .then(response => {
            if (response.role === "Engineer") {
                return engineerEmp();
            } else if (response.role === "Manager") {
                return managerEmp();
            } else if (response.role === "Intern") {
                return internEmp();
            };

        });

    newMember();
    makingTeam();
};


// this will allow us to ask for user input on the emplyee
const employeeInfo = () => {
    return inquirer
        .prompt([
            {
                // Employee Name
                type: 'input',
                message: "What is the Employee's name?",
                name: 'name',
            },
            {
                // Employee Title
                type: 'list',
                message: 'Select: ',
                choices: ['Employee',
                    'Manager',
                    'Engineer',
                    'Intern',

                ],
                name: 'role',
            },
            {
                // Employee id
                type: 'input',
                message: "What is the Employee id?",
                name: 'id',
            },
            {
                // Employee email
                type: 'input',
                message: "What is the Employee email?",
                name: 'email',
            },
        ]);

};


const managerEmp = () => {
    return inquirer
        .prompt([
            {
                // Employee office number function call IF MANAGER is selcted
                type: 'input',
                message: "What is the Employee office number?",
                name: 'office_number',
            },
        ]);
};

const engineerEmp = () => {
    return inquirer
        .prompt([
            {
                // put in Engineer function call IF engineer selected in list
                // Employee GitHub
                type: 'input',
                message: "What is the Employee's Github?",
                name: 'github',
            },
        ]);
};

const internEmp = () => {
    return inquirer
        .prompt([
            {
                // put int intern function call IF intern selected in list
                // Intern School
                type: 'input',
                message: "What School is intern from?",
                name: 'school',
            },
        ]);
};

const makingTeam = () => {
    let newTeam;
    if (employeeInfo.role === "Engineer") {
       return newTeam = new Engineer(name, role, id, email, github);
    } else if (employeeInfo.role === "Intern") {
      return  newTeam = new Intern(name, role, id, email, school);
    } else if (employeeInfo.role === "Manager") {
       return newTeam = new Manager(name, role, id, email, office_number);
    } team.push(newTeam); {

    }
};

const generateHTML =  () => {
        const genTeamPage = generateTeamPage(team);
        writeFileAsync("./src/main.html", genTeamPage)
            .then(() => console.log("Succes!"))
            .catch(error => console.log(error));
};



init();

const newMember = async () => {
    return inquirer
        .prompt([
            {
                // Employee Title
                type: 'list',
                message: 'Would you like to add another employee?',
                choices: ['Yes',
                    'No',
                ],
                name: 'add_new',
            },
        ]).then(response => {
            if (response.add_new === "Yes") {
                init();
            } else if (response.add_new === "No") {
                console.log("No new employees.");
                 generateHTML(); 
            };

        });
    };