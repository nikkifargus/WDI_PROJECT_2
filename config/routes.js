const router        = require('express').Router();

const statics = require('../controllers/statics');
// const recipes         = require('../controllers/recipes');
const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');

// function secureRoute(req, res, next){
//   if(!req.session.userId){
//     return req.session.regenerate(()=> {
//       req.flash('danger', 'You must be logged in to view this content');
//       res.redirect('/login');
//     });
//   }
//   return next();
// }

router.route('/')
  .get(statics.homepage);

// router.route('/recipes')
//   .get(recipes.index)
//   .post(secureRoute, recipes.create);
//
// router.route('/recipes/new')
//   .get(recipes.new);
//
// router.route('/recipes/:id')
//   .get(secureRoute, recipes.show)
//   .put(secureRoute, recipes.update)
//   .delete(secureRoute, recipes.delete);
//
// router.route('/recipes/:id/edit')
//   .get(recipes.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

module.exports = router;
