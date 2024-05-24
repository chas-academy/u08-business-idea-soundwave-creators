// middleware/authenticate.js
const passport = require('passport');

const authenticate = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');  // or respond with status 401 Unauthorized
};

module.exports = authenticate;
