const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, githubUsername){
        super(name,id, email);
        this.githubUsername = githubUsername; 

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
  
    getGithub(){
        return this.githubUsername;
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;