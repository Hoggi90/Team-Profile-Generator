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
                message: "What is the manager's name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What is the manager's employee ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            arrayTeam.push(manager);
            teamBuild();
        });

    }



    init();