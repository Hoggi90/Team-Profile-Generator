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



function App() {

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
