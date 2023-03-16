// importing all the required files and dependencies
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";
const OUTPUT_DIR = path.resolve(new URL("output", import.meta.url).pathname);
const outputPath = path.join(OUTPUT_DIR, "team.html");
import generateTeam from "./src/page-template.js";


// Empty array to push the team objects to
let arrayTeam = [];


// function to initialise the start of the application
function init() {
    // function to start building the team, a series of inquirer prompt questions with a switch case
    function teamBuild() {
        inquirer.prompt([{
            type: "list",
            message: "Who would you like to add to the team?",
            name: "employeeChoice",
            choices: ["Manager", "Engineer", "Intern", "No more employees required"]
        }]).then(function (userInput) {
            switch (userInput.employeeChoice) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    buildHTML();
            }
        })
    }
    // function to a add a manager, which includes a series of inquirer prompts
    function addManager() {
        inquirer.prompt([

            {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What's the manager's ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's email address?"
            },

            {
                type: "input",
                name: "managerNumber",
                message: "What's the manager's office number?"
            }
            // callback function to push the answers into the empty array 'arrayTeam'
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
            arrayTeam.push(manager);
            teamBuild();
        });

    }

    // function to a add an engineer, which includes a series of inquirer prompts
    function addEngineer() {
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "What's the engineer's name?"
            },

            {
                type: "input",
                name: "engineerId",
                message: "What's the engineer's ID number?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What's the engineer's email address?"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What's the engineer's GitHub username?"
            }
            // callback function to push the answers into the empty array 'arrayTeam'
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            arrayTeam.push(engineer);
            teamBuild();
        });

    }

    // function to a add an intern, which includes a series of inquirer prompts
    function addIntern() {
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "What's the intern's name?"
            },

            {
                type: "input",
                name: "internId",
                message: "What's the intern's ID number?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What's the intern's email address?"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What's the school the intern goes to?"
            }
            // callback function to push the answers into the empty array 'arrayTeam'
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            arrayTeam.push(intern);
            teamBuild();
        });

    }

    // a function to build the HTML page which console logs validation that the HTML was created. includes a fs method to write to the file
    function buildHTML() {
        console.log("Success! The team has been generated!")

        fs.writeFileSync(outputPath, generateTeam(arrayTeam), "UTF-8")

    }
    // calls the teamBuild function
    teamBuild();

}
// calls the initialise function
init();