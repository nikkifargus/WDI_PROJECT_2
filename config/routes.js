const router        = require('express').Router();

// Require controllers
const statics       = require('../controllers/statics');
const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const recipes       = require('../controllers/recipes');
const users         = require('../controllers/users');
const comments      = require('../controllers/comments');



function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in to see this content.');
      res.redirect('/login');
    });
  }

  return next();
}

router.route('/')
.get(statics.homepage);

router.route('/about')
.get(statics.about);

router.route('/recipes')
.get(recipes.index)
.post(secureRoute, recipes.create);

router.route('/recipes/new')
.get(secureRoute, recipes.new);

router.route('/recipes/:id')
.get(secureRoute, recipes.show)
.post(secureRoute, comments.create)
.put(secureRoute, recipes.update)
.delete(secureRoute, recipes.delete);

router.route('/recipes/:id/edit')
.get(secureRoute, recipes.edit);

router.route('/recipes/:recipeId/comments/:commentId')
  .delete(comments.delete);

router.route('/register')
.get(registrations.new)
.post(registrations.create);

router.route('/login')
.get(sessions.new)
.post(sessions.create);

router.route('/logout')
.get(sessions.delete);

router.route('/users/:id')
.get(users.show);

module.exports = router;
