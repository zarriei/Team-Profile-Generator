const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http');
const util = require("util");
const Choices = require('inquirer/lib/objects/choices');
const writeFileAsync = util.promisify(fs.writeFile);

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
            name: "title",
            message: "select",
            choices: ['Employee',
                'Manager',
                'Engineer',
                'Intern',



            ]
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
        },


        {
            type: "input",
            name: "school",
            message: "What school is intern from?",
        },

    ]);
}
employeeInfo();
