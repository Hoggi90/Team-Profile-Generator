import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";
const OUTPUT_DIR = path.resolve(new URL("output", import.meta.url).pathname);
const outputPath = path.join(OUTPUT_DIR, "team.html");
import generateTeam from "./src/page-template.js";


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let arrayTeam = [];



function init() {

    function teamBuild() {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee would you like to add to your team?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
        }]).then(function (userInput) {
            switch (userInput.addEmployeePrompt) {
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

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
            arrayTeam.push(manager);
            teamBuild();
        });

    }


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

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            arrayTeam.push(engineer);
            teamBuild();
        });

    }

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

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            arrayTeam.push(intern);
            teamBuild();
        });


        init();