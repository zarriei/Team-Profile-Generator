// retreive the Employee module class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, role, email, office_number){
        super(name, role, id, email);
        this.office_number = office_number;
    }

    // returns the managers office number
    getNumber() {
        return this.office_number;
    }
}

module.exports = Manager;