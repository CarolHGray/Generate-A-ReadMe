// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 

const generateReadmePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
  
 // Get input for page title, github, email and description
    return inquirer.prompt([
    {
            type: 'input',
            name: 'title',
            message: 'Project name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name.');
                    return false; 
                }
            }
        },  

        {
            type: 'input',
            name: 'github',
            message: 'GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub username.');
                    return false; 
                }
            } 
        },

        { 
            type: 'input',
            name: 'description',
            message: 'Description (short) of project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter description of project.');
                    return false; 
                }
            }
        }, 

        {
            type: 'input',
            name: 'email',
            message: 'email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter email address.');
                    return false; 
                }
            }
        },   
        

//Write object for adding license information
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project have?',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Choose a license.');
                    return false; 
                }
            }
        },
        
        {
            type: 'input',
            name: 'test', 
            message: 'Command for running tests',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List people who contributed to the repo.'
        }
    ]);
};            

// TODO: Create a function to write README file

const writeToFile = data => {
    fs.writeToFile('README.md', data, err => {
        
        if (err) {
            console.log(err);
            return;
    
        } else {
            console.log("You created a useful README page!")
        }
    })
}; 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
