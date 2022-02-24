const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

//View all departments//
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
    
  //add a department//
app.post('/api/department', ({ body }, res) => {
    const errors = inputCheck(
      body,
      'id',
      'first_name',
      'last_name'
  );
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

module.exports = router;

/*Get a single department//
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