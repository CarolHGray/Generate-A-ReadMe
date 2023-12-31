
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation 
    * ${data.install}

  ## Usage 
    * ${data.usage}

    ## License 
    This project is license under ${data.license}

    ## Contributing 
    ${data.contributors}

    ## Tests
    ${data.test}
  `;
}
module.exports = generateMarkdown;
