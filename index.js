
const inquirer = require('inquirer');
const generatePage = require('./src/pageTemplate');
const { writeFile, copyFile } = require('./src/generateSite')





const promptTeam = () => {
    console.log(`
    ==================
    Add a Team Memeber
    ==================
    `)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'team',
            message: 'Please choose which Team Member you would like to add. (Required)',
            choices: ["Manager", "Engineer", "Intern", "Finished"],
            validate: teamInput => {
                if (teamInput) {
                    return true;
                } else {
                    console.log('Please choose a Team Member to add or select Finished.');
                }
            }
        }
    ])
};

promptTeam()
    .then
