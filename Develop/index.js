// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Describ your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Table of Contents",
    name: "contents",
  },
  {
    type: "input",
    message: "Usage:",
    name: "usage",
  },
  {
    type: "input",
    message: "Installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Tests instruction:",
    name: "tests",
  },
  {
    type: "input",
    message: "Github username",
    name: "github",
  },
  {
    type: "input",
    message: "Email address",
    name: "email",
  },
  {
    type: "list",
    message: "Choose your license:",
    name: "license",
    choices: ["BSD", "MIT", "GNUGPLv3"],
  },
];

// TODO: Create a function to initialize app & write a file function
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generate(data);
    console.log(markdown);
    fs.writeFile("README.md", markdown, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });
}

//  Function call to initialize app
init();
