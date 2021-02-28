// constructor function need here to get the 
// id, name, email, role
class Employee {
    constructor(name, role, id, email) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
    }
    // returns the name
    getName() {
        return this.name;
    };
       // returns employee role
       getRole() {
        return this.role;
    };
    // returns the id number
    getId() {
        return this.id;
    };
    // returns the email
    getEmail() {
        return this.email;
    };
 
}

module.exports = Employee;  