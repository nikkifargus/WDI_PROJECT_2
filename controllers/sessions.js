const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Unknown email/password combination');
        return res.status(401).render('sessions/new', { message: 'Unrecognised credentials' });
      }
      req.session.userId = user._id;
      console.log(user._id);
      req.flash('info', `Thanks for logging in, ${user.username}!`);



      return res.redirect('/');
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
