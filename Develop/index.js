const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const promptUser = () => {
    inquirer.prompt([
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
      message: 'What is the use for your project?',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project.',
        name: 'description',
      },
    {
      type:"list",
      message: "What is the license for this project?",
      name: "license",
      choices: ["MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
      "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
      "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", 
      "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "None"],
    },
    {
      type: 'list',
      message: 'What command should be run to install dependencies?',
      name: "dependencies",
      choices: ['npm install'],
    },
    {
      type: 'list',
      message: 'what command should be run to run tests?',
      name: 'tests',
      choices: ['npm run test'],

    },
    {
      type: 'input',
      message: 'Would you like to credit other collaborators and/or sources?',
      name: 'credits',

    }   
    ]).then(answers => {
        writeToFile(answers)
        console.log('Successfully wrote to README.md!')
    }).catch((err) => console.error(err));

};

const writeToFile = answers => {
    writeFileAsync('README.md', generateMarkdown(answers))
};

promptUser();


