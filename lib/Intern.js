// importing the employee constructor class
import Employee from "./Employee.js";

// constructor class that extends from employee
export default class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
};