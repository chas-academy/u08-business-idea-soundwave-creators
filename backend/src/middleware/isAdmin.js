// middleware/isAdmin.js
function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.role === 'admin') {
      return next();
    }
    res.status(403).json({ message: 'Access denied. You are not authorized to access this area.' });
  }
  
  // Use this middleware in admin routes
app.get('/admin/dashboard', isAdmin, (req, res) => {
  res.send('Admin Dashboard');
});