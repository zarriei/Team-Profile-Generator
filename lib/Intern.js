// retreive the Employee module class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, role, email, school){
        super(name, role, id, email);
        this.school = school;
    }
    // returns the interns school
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;