//Packages needed for this application
const inquirer = require('Inquirer');
const express = require('express');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Inner_Peace23951$!',
    database: 'company'
  },
  console.log('Connected to the company database.')
);

//Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
    type: "list",
    name: "start page",
    message: "To obtain information on an employee, their department, or their role, please click on one of the options below:",
    choices:['View', 'Add', 'Update', 'Delete'],
    validate: startInput => {
      if (startInput) {
          return true;
        } else {
          console.log('Please identify if you want to view, add, update, or delete employee details');
          return false;
        }
      }
    },
    
    const promptUser = () => {
      return inquirer.prompt([
        {
        type: "list",
        name: "view",
        message: "Please selection an option how you would like to view:",
        choices:['By all employees', 'By Employee', 'By Role', 'By Department'],
        validate: viewInput => {
          if (viewInput) {
              return true;
            } else {
              console.log('Please identify if you want to view, add, update, or delete employee details');
              return false;
            }
          }
        },

// Get all employees
app.get('/api/employees', (req, res) => {
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Employees Found',
      data: rows
    });
  });

//Get all roles//
app.get('/api/role', (req, res) => {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Roles Found',
      data: rows
    });
  });
});

//Get all departments//
app.get('/api/department', (req, res) => {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Departments Found',
      data: rows
    });
  });
});

// Get a single employee
app.get('/api/employees/:id', (req, res) => {
  const sql = `SELECT * FROM employees WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Employee Found',
      data: row
    });
  });
});

//Get a single role//
app.get('/api/role/:id', (req, res) => {
  const sql = `SELECT * FROM role WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Role Found',
      data: row
    });
  });
});

//Get a single department//
app.get('/api/department/:id', (req, res) => {
  const sql = `SELECT * FROM department WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Department Found',
      data: row
    });
  });
});

// Delete an employee
app.delete('/api/employees/:id', (req, res) => {
  const sql = `DELETE FROM employees WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee Not Found'
      });
    } else {
      res.json({
        message: 'Employee Deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

//delete a role//
app.delete('/api/role/:id', (req, res) => {
  const sql = `DELETE FROM role WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Role Not Found'
      });
    } else {
      res.json({
        message: 'Role Deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

//delete a department//
app.delete('/api/department/:id', (req, res) => {
  const sql = `DELETE FROM department WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department Not Found'
      });
    } else {
      res.json({
        message: 'Department Deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

// Add an employee
app.post('/api/employees', ({ body }, res) => {
  const errors = inputCheck(
    body,
    'id',
    'first_name',
    'last_name',
    'role_id',
    'manager_id'
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

//add a role//
  app.post('/api/role', ({ body }, res) => {
    const errors = inputCheck(
      body,
      'id',
      'title',
      'salary',
      'department_id'
    );
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

//add a department//
    app.post('/api/department', ({ body }, res) => {
      const errors = inputCheck(
        body,
        'id',
        'first_name',
        'last_name',
    );
      if (errors) {
        res.status(400).json({ error: errors });
        return;
      }

//Update an employee needed here:
  const sql = `INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
    VALUES (?,?,?)`;
  const params = [body.id, body.first_name, body.last_name, body.role_id, body.manager_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Employee Updated',
      data: body
    });
  });
});

//update a role//
const sql = `INSERT INTO role (id, title, salary, department_id)
    VALUES (?,?,?)`;
  const params = [body.id, body.title, body.salary, body.department_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Role Updated!',
      data: body
    });
  });
});

//update a department//
const sql = `INSERT INTO department (id, first_name, last_name)
    VALUES (?,?,?)`;
  const params = [body.id, body.first_name, body.last_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Department Updated',
      data: body
    });
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
  if (err) throw err;
  //return console.log(err)

  console.log('README is complete')
  });
}

// TODO: Create a function to initialize app
function init() {
promptUser()
.then(function(data){
  console.log('inside.then')
  console.log(data)
    writeToFile("README.md", generateMarkdown(data));
});
}
 
// Function call to initialize app
//init();