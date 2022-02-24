const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

//View all roles//
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
      
//Add a role//
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
      
//Update an employee role//
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
  
  module.exports = router;

/* Get a single role
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
      })
      */