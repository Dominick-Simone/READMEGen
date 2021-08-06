// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is first and last name?",
        name: "name",
    },
    {
        type: "input",
        message: "What year is it?",
        name: "year",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Give installation instructions for your project.",
        name: "install",
    },
    {
        type: "input",
        message: "Give usuage information for your project",
        name: "usuage",
    },
    {
        type: "input",
        message: "Give contribution guidelines for your project.",
        name: "guidelines",
    },
    {
        type: "input",
        message: "Give test instructions for your project.",
        name: "test",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "list",
        message: "Choose which license you'd like to use.",
        choices: ["MIT", "Apache2.0"],
        name: "license"
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName , data, err =>
    err ? console.error(err) : console.log("success"))
}
// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then(responses => {
        const readMe = `# ${responses.title} ![LicenseImage](${renderLicenseBadge(responses.license, responses.name, responses.year)})

## Table of Contents
* [Description](#Description)
* [Installation Guidelines](#Installation)
* [Usage Information](#Usage)
* [Contribution Guidelines](#Contribution)
* [Test Instructions](#Test)
* [License](#License)
* [Questions](#Questions)

## Description
${responses.description}
  
## Installation
${responses.install}
  
## Usage
${responses.usuage}
  
## Contribution
${responses.guidelines}
  
## Test
${responses.test}

## License
${renderLicenseSection(responses.license, responses.name, responses.year)}

## Questions 
* Github: https://github.com/${responses.github}
* Email: ${responses.email}`;
    writeToFile(`README.md`, readMe)
    }
        )
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apacheBadge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  const mitBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  switch (license) {
    case "MIT":
      return mitBadge;
    case "Apache2.0":
      return apacheBadge;
    default:
      return '';
  } 
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name, year) {
      const mitLicense = `Copyright ${year} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      const apacheLicense = `Copyright ${year} ${name}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   
http://www.apache.org/licenses/LICENSE-2.0
   
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
      switch (license) {
        case "MIT":
          return mitLicense;
        case "Apache2.0":
          return apacheLicense;
      }
    }
// Function call to initialize app
init();
