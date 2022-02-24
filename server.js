//Packages needed for this application
const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const inquirer = require('Inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

//Created an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
    type: "list",
    name: "start page",
    message: "How would you like to proceed? Please click on one of the options below:",
    choices:['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add An Employee', 'Update an Employee Role'],
    validate: startInput => {
      if (startInput) {
          return true;
        } else {
          console.log('Please identify if you want to view, add, or update company details.');
          return false;
        }
      }
    },

// TODO: Create a function to write company-details file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
  if (err) throw err;
  console.log('company-details are complete')
});
  

// TODO: Create a function to initialize app
function init() {
promptUser()
.then(function(data){
  console.log('inside.then')
  console.log(data)
    writeToFile("company-details.md", generateMarkdown(data));
});
}
 
// Function call to initialize app
//();
