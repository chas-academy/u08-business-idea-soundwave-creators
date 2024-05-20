// routes/admin.js
const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin');

router.get('/dashboard', isAdmin, (req, res) => {
  res.render('admin/dashboard'); // Assuming you are using a template engine
});

module.exports = router;
