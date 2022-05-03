//Packages needed for this application
const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const inquirer = require('Inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const connection = require('mysql2/typings/mysql/lib/Connection');

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

// Start server after database connection
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
    choices:['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add an Employee', 'Update an Employee Role'],
    }

.then (function(res) {
switch (res.startPage){
case "View All Departments":
viewDepartments();
break;

case "View All Roles":
viewRoles();
break;

case "View All Employees":
viewEmployees();
break;

case "Add Department":
addDepartment();
break;

case "Add an Employee":
  addEmployee();
  break;

case "Update an Employee":
  UpdateEmployee();
  break;
  }
});
}

function viewDepartments(){
  let query = "SELECT department.name";

}

function viewEmployees(){
let query = "SELECT employees.first_name, employees.last_name";
query += "FROM employees";
query += "INNER JOIN role ON role.department_id = role.department_id";
query += "LEFT JOIN employees ON employees.manager_id = manager.id";
 
connection.query(query, function(err, res){
  console.table('All Employees',res);
})
)











// Function call to initialize app
init();
