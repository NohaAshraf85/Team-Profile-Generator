const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name,id, email);
        this.school = school;
    }

    getName(){
        return this.name;

    }

    getId(){
        return this.id;

    }

    getEmail(){
        return this.email;

    }
    
    getSchool(){
        return this.school
    }
    
    
    getRole(){
        return "Intern"
    }
  
}

module.exports = Intern;