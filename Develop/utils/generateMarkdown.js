// function to generate markdown for README
function generateMarkdown(answers) {
    return`
    ## Title
    ${answers.title}
  
    ## Description 
    ${answers.description}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Credits](#credits)
    * [Tests](#tests)
    * [Author Info](#author-info)
    
    ## Installation
    ${answers.dependencies}
  
    ## Usage
    ${answers.usage}
  
    ## License
    ${answers.license} 
  
    ## Credits
    ${answers.credits}
  
    ## Tests
    ${answers.tests}
  
    ## Author Info
    ${answers.github}
    ${answers.email}
    
  `;
  }
  
  module.exports = {generateMarkdown};