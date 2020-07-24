//requires fs and inquirer
var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js");

const { title } = require("process");

// array of questions for user
const questions = [
  { name: "title", message: "Enter Project Title:", type: "input" },
  { name: "description", message: "Enter a Description:", type: "input" },
  {
    name: "installationInstructions",
    message: "Enter Installation Instructions:",
    type: "input",
  },
  {
    name: "usageInformation",
    message: "Enter Usage Information:",
    type: "input",
  },
  {
    name: "contributionGuidelines",
    message: "Enter Contributions:",
    type: "input",
  },
  {
    name: "testInstructions",
    message: "Enter Test Instructions:",
    type: "input",
  },
  {
    name: "license",
    message: "Choose License:",
    type: "list",
    choices: ["MIT", "Mozilla MPL 2.0", "GNU GPL v3", "ISC"],
  },
  {
    name: "githubUsername",
    message: "Enter Github Username:",
    type: "input",
  },
  {
    name: "emailAddress",
    message: "Enter Email Address:",
    type: "input",
  },
];

let licenseArr = [
  {
    licenseName: "MIT",
    link:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  },
  {
    licenseName: "ISC",
    link:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
  });
}

// function to initialize program
function init() {
  //ask the questions
  inquirer.prompt(questions).then((answers) => {
    //create the
    var licenseLogoLink = licenseArr.filter(
      (logo) => logo.licenseName === answers.license
    );
    answers.logoLink = licenseLogoLink[0].link;
    console.log(answers);
    let readmeText = generateMarkdown(answers);

    writeToFile("Output/README.md", readmeText);
  });
}

// function call to initialize program
init();