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
},
    
module.exports = router;
