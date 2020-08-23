const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const addModule = require("./utils/generateMarkdown.js");

const markdown = addModule.genMarkdown;
const fileName = "README.md";


// array of questions for user
const questions = [

    {
        type: "input",
        message: "Whats the project name?",
        name: "title"

    }

];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{ 
        if (err) {
            return console.log(err);
        }

        console.log("success!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        let content = markdown(data);
        writeToFile(fileName, content);
    });

}

// function call to initialize program
init();
