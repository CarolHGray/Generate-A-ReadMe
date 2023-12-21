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
        
     
            




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
