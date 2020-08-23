const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const addModule = require("./utils/generateMarkdown.js");

const markdown = addModule.generateMarkdown;
const fileName = "README.md";


// array of questions for user
const questions = [

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
    writeToFile();
}

// function call to initialize program
init();
