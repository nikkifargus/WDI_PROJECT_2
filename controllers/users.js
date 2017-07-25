const User = require('../models/user');
const Recipe = require('../models/recipe');

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      Recipe
        .find({ createdBy: user._id })
        .exec()
        .then(recipes => {
          res.render('users/show', { user, recipes });
        });
    });
}


module.exports = {
  show: usersShow
};
