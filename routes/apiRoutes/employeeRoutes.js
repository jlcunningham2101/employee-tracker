const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('./utils/inputCheck');

// View all employees
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
  /* Get a single employee
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
    } 
    else {
      res.json({
        message: 'Employee Deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});
