const User = require('../models/user');

//takes to registrations new page
function registrationsNew(req, res){
  return res.render('registrations/new');
}

//creates the new user to req.body then redirects to homepage. if password and password confirmation dont match, redirects to registrations new
function registrationsCreate(req, res){
  User
    .create(req.body)
    .then((user) => {
      req.flash('info', `Thanks for registering, ${user.username}! Please login`);
      // req.session.userId = user._id;
      return res.redirect('/login');
    })
    .catch((err) => {
      if(err.name === 'ValidationError'){
        return res.status(400).render('registrations/new', { message: 'Passwords do not match'});
      }
      res.status(500).end();
    });
}

module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};
