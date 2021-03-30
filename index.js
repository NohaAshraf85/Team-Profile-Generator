const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


var teamMembers = [];

const writeFileAsync = util.promisify(fs.writeFile);

function promptChoices()
{
  return inquirer.prompt([
    {
        type: "list",
        name: "option",
        message: "Which type of team member would you like to add?",
        choices: 
        [
          "engineer",
          "intern",
          "finish building my team",
        ]
    }]);
}
function promptTeamManager() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager’s name?"
      },

      {
        type: "input",
        name: "id",
        message:"What is the team manager’s id?"
      },

      {
        type: "input",
        name: "email",
        message: "What is the team manager’s email?"
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager’s office number?"
      },
     
    ]);
  }

  function promptEngineer() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "id",
        message:"What is the engineer's id?"
      },

      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
      },

      {
        type: "input",
        name: "github",
        message: "What is the engineer's github?"
      },
    ]);
  }

  function promptIntern() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern ‘s name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern’s id?"
      },

      {
        type: "input",
        name: "email",
        message: "What is the intern’s email?"
      },

      {
        type: "input",
        name: "school",
        message: "What is the intern’s school?"
      },

    ]);
  }

  function generateHTML() {

    var htmlSnippet="";

    for(var i=0; i < teamMembers.length; i++)
    {
      var title="";
      var details="";

      if(teamMembers[i].getRole() == "Manager")
      {
        title=`<i class="fas fa-mug-hot"></i> ${teamMembers[i].getRole()}`;
        details=`Office number: ${teamMembers[i].officeNumber}`;
      }

      else if(teamMembers[i].getRole() == "Engineer")
      {
        title=`<i class="fas fa-glasses"></i> ${teamMembers[i].getRole()}`;
        details=`GitHub: ${teamMembers[i].getGithub()}`;
      }

      else if(teamMembers[i].getRole()=="Intern")
      {
        title=`<i class="fas fa-user-graduate"></i> ${teamMembers[i].getRole()}`;   
        details=`School: ${teamMembers[i].getSchool()}`;
      }
      
      htmlSnippet+=` <div class="col-lg-4 col-md-3 col-sm-12">
      <div class="card mt-5 p-3" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          ${teamMembers[i].getName()}
          <br/>
          ${title}
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${teamMembers[i].getId()}</li>
                  <li class="list-group-item">${teamMembers[i].getEmail()}</li>
                  <li class="list-group-item">${details}</li>
              </ul>
              
        </div>
  </div>`;

    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/styles.css">
</head>
<body>
    <header>
        <nav class="navbar navbar-dark bg-success bg-gradient">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 mx-auto py-3">My Team</span>
            </div>
          </nav>
    </header>

    <main>
        <div class="container">
            <div class="row">
${htmlSnippet}
                
            </div>
        </div>

    </main>
    
</body>
</html>`;
  }

  promptTeamManager()
  .then(function(answers) {
   
    var teamManager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
    teamMembers.push(teamManager);
   
   promptChoices().then(function(choice){
     
    promptChoice(choice);
   });
   
  })
  .then(function() {
    
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });



function promptChoice(choice)
{
  console.log(choice.option);
  if(choice.option == "engineer")
  {
    promptEngineer().then(function(answers) {
    
      var engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
    teamMembers.push(engineer);
    
    promptChoices().then(function(choice){
     
    promptChoice(choice);
   });
      
    });

  }
  else if(choice.option == "intern")
   {
    promptIntern().then(function(answers) {
    
      var intern = new Intern (answers.name,answers.id,answers.email,answers.school);
    teamMembers.push(engineer);
    
    promptChoices().then(function(choice){
     
    promptChoice(choice);
   });
      
    });

  }

  else
  {
    const readme = generateHTML();

    return writeFileAsync("generatedindex.html", readme);
  }
}
  