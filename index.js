const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http');
const util = require("util");
const Choices = require('inquirer/lib/objects/choices');
const writeFileAsync = util.promisify(fs.writeFile);



const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");






const init = () => {
    employeeInfo()
    .then(response => {
        if (response.role === "Engineer") {
            engineerEmp();
        } else if (response.role === "Manager") {
            managerEmp();
        } else if (response.role === "Intern") {
            internEmp();
        }   newMember()
        .then(response => {
            if(response.add_new === "Yes") {
                employeeInfo();
            }else if(response.add_new === "No") {
                // generateHTML();
                console.log("No new employees.")
            }

        })
    }) 

};


const employeeInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Employee Id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "list",
            name: "role",
            message: "select",
            choices: ['Employee',
                'Manager',
                'Engineer',
                'Intern',
            ]
        },

    ]);
}
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

const newMember = () => {
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
    ])
}


init();



