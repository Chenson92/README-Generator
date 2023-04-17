// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    GNUGPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  };
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    BSD: "[License](https://opensource.org/licenses/BSD-3-Clause)",
    MIT: "[License](https://opensource.org/licenses/MIT)",
    GNUGPLv3: "[License](https://www.gnu.org/licenses/gpl-3.0)",
  };
  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license
    ? `This project is licensed under the terms of the ${license} license.`
    : ` N/A`;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.title}
    
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Description of the Project](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contribution guidelines](#contributing)
  - [Tests instruction](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contribution guidelines
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  - Contact me with the following E-mail address:
  ${data.email}

  - Here is my Github:
  https://github.com/${data.github}

  ## License
  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)} 
`;
}

module.exports = generateMarkdown;
