// controllers/userController.js
const User = require('../models/user');

exports.socialMediaAuthSuccess = (req, res) => {
  // Redirect users based on their role
  if (req.user.role === 'admin') {
    res.redirect('/admin/dashboard'); // Admin dashboard path
  } else {
    res.redirect('/profile'); // Normal user profile path
  }
};
// Handle user profile fetching
exports.getUserProfile = (req, res) => {
  // Ensure the user is logged in
  if (!req.user) return res.status(401).send('Not authenticated');
  res.json(req.user);
};
// Update user profile
exports.updateUserProfile = (req, res) => {
  const { username, email } = req.body;
  User.findByIdAndUpdate(req.user.id, { username, email }, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Delete user
exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.user.id)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Handle user registration with email
exports.signupWithEmail = async (req, res) => {
  try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await new User({
          username,
          email,
          password: hashedPassword
      }).save();
      res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
      res.status(500).json({ error: 'Server error during registration' });
  }
};

// Handle user login with email
exports.loginWithEmail = async (req, res) => {
  // This function can be kept minimal as passport-local will handle the actual authentication
  res.redirect('/profile');
};