// dependencies
// connecting the markdown file template
const generateMarkdown = require("./utils/generateMarkdown")

// fs for file writing
var fs = require("fs");

// requiring inquirer
var inquirer = require("inquirer");

// array of questions for user
const questions = [{
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "list",
        message: "Which licenses did you use for your project?",
        name: "license",
        choices: ["MIT", "Zlib", "Apache", "None"]
    },
    {
        type: "input",
        message: "Who contributed to the creation of your project?",
        name: "contributors",
    },
    {
        type: "input",
        message: "What tests will you be running?",
        name: "tests",
    },
    {
        type: "input",
        message: "What FAQs should users know about?",
        name: "questions",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (response) {
        // creating a variable to fill the markdown template with user input data
        var markdownData = generateMarkdown(response);
        //writing the user input data to the readme
        writeToFile("README.md", markdownData);
    });
}

// function call to initialize program
init();