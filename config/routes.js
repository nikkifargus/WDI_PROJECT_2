const router        = require('express').Router();

// Require controllers
const statics       = require('../controllers/statics');
const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const recipes = require('../controllers/recipes');



// function secureRoute(req, res, next) {
//   if (!req.session.userId) {
//     return req.session.regenerate(() => {
//       req.flash('danger', 'You must be logged in.');
//       res.redirect('/login');
//     });
//   }
//
//   return next();
// }

router.route('/')
.get(statics.homepage);

router.route('/about')
.get(statics.about);

router.route('/recipes')
.get(recipes.index)
.post(recipes.create);

router.route('/recipes/new')
.get(recipes.new);

router.route('/recipes/:id')
.get(recipes.show)
.put(recipes.update)
.delete(recipes.delete);

router.route('/recipes/:id/edit')
.get(recipes.edit);

router.route('/register')
.get(registrations.new)
.post(registrations.create);

router.route('/login')
.get(sessions.new)
.post(sessions.create);

router.route('/logout')
.get(sessions.delete);

module.exports = router;
