const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the README Title?"
      },
      {
        type: "input",
        name: "description",
        message: "Please add the README description"
      },

      {
        type: "input",
        name: "installation",
        message: "What are the installation requirements"
      },
      {
        type: "input",
        name: "usage",
        message: "What is this purpose and usage of this application?"
      },
      {
        type: "list",
        name: "license",
        message: "What Type of license?",
        choices: [
          "MIT License",
          "GNU General Public License v3.0",
          "Apache License 2.0",
          "ISC License",
          "Mozilla Public License 2.0"
        ]
      },
      {
        type: "input",
        name: "contributing",
        message: "How to contribute?"
      },
      {
        type: "input",
        name: "tests",
        message: "What type of testing?"
      },
      {
        type: "input",
        name: "githubuser",
        message: "Github User"
      },
      {
        type: "input",
        name: "email",
        message: "email address"
      }
    ]);
  }

  function generateHTML(answers) {
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

                <div class="col-lg-4 col-md-3 col-sm-12">
                    <div class="card mt-5 p-3" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                      </div>
                </div>

                <div class="col-lg-4 col-md-3 col-sm-12">
                    <div class="card mt-5 p-3" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                      </div>
                </div>

                <div class="col-lg-4 col-md-3 col-sm-12">
                    <div class="card mt-5 p-3" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                      </div>
                </div>

                <div class="col-lg-4 col-md-3 col-sm-12">
                    <div class="card mt-5 p-3" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                      </div>
                </div>

                <div class="col-lg-4 col-md-3 col-sm-12">
                    <div class="card mt-5 p-3" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                      </div>
                </div>

                <div class="col-lg-4 col-md-3 col-sm-12">
                    <div class="card mt-5 p-3" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                      </div>
                </div>
            </div>
        </div>

    </main>
    
</body>
</html>`;
  }

  promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);

    return writeFileAsync("generatedREADME.md", readme);
  })
  .then(function() {
    console.log("Successfully wrote to README1.md");
  })
  .catch(function(err) {
    console.log(err);
  });




  