const User = require('../models/user');

function staticsHomepage(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/homepage', { users }));
}

function staticsAbout(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/about', { users }));
}

module.exports = {
  homepage: staticsHomepage,
  about: staticsAbout
};
