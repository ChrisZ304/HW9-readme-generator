const inquirer = require('inquirer')
const fs = require('fs');
const { stringify } = require('querystring');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',

    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project.',
        name: 'description',
      },
    {
      type: 'input',
      message: 'What license should your project have?',
      name: 'license',
    },
    {
      type: 'input',
      question: 'What command should be run to install dependencies?',
      name: "instDependencies",
    },
    {
      type: 'input',
      question: 'what command should be run to run tests?',
      option: '(npm test)',

    }    
  ])

// TODO: Create a function to write README file
const writeFile = util.stringify(fs.writeFile);

// TODO: Create a function to initialize app
const prompt = () => {
    return inquirer.prompt;

}

// Function call to initialize app
init(prompt);
