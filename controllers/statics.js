const User = require('../models/user');

function staticsHomepage(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/homepage', { users }));
}

function staticsAbout(req, res) {
  res.render('statics/about');
}

function staticsInspiration(req, res) {
  res.render('statics/inspiration');
}

module.exports = {
  homepage: staticsHomepage,
  about: staticsAbout,
  inspiration: staticsInspiration
};
