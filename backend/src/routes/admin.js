// // routes/admin.js
// const express = require('express');
// const router = express.Router();
// const isAdmin = require('../middleware/isAdmin');

// router.get('/dashboard', isAdmin, (req, res) => {
//   res.render('admin/dashboard'); // Assuming you are using a template engine
// });

// module.exports = router;


// routes/admin.js
// routes/admin.js
const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin');
const User = require('../models/user');

// Reset password route
router.post('/reset-password', isAdmin, async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user's password
    user.password = newPassword; // You may need to hash the new password before saving it

    // Save updated user
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
