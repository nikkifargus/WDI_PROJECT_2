const Recipe = require('../models/recipe');

function recipeIndex(req, res, next){
  Recipe
    .find()
    .then((recipes) =>
    res.render('recipes/index', { recipes }))
    .catch(next);
}

function recipesNew(req, res) {
  res.render('recipes/new');
}

function recipesCreate(req, res, next) {

  req.body.createdBy = req.user._id;

  Recipe
  .create(req.body)
  .then(()=> res.redirect('/recipes'))
  .catch(next);
}

function recipesShow(req, res, next) {
  Recipe
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((recipe) => {
      if(!recipe) return res.status(404).render('statics/404');
      res.render('recipes/show', { recipe });
    })
    .catch(next);
}

//renders the edit page with recipe id
function recipesEdit(req, res, next){
  Recipe
    .findById(req.params.id)
    .then((recipe)=> {
      if(!recipe) return res.status(404).render('statics/404');
      res.render('recipes/edit', { recipe });
    })
    .catch(next);
}

//on the recipe page creates 'new' form populated with the data for this recipe. Then replaces the old recipe with the new information and redirects back to recipe show page.
function recipesUpdate(req, res, next) {
  Recipe
    .findById(req.params.id)
    .then((recipe)=> {
      if(!recipe) return res.status(404).render('statics/404');

      for (const field in req.body){
        recipe[field] = req.body[field];
      }
      return recipe.save();
    })
    .then((recipe) => res.redirect(`/recipes/${recipe.id}`))
    .catch(next);
}

function recipesDelete(req, res, next){
  Recipe
  .findById(req.params.id)
  .then((recipe)=> {
    if(!recipe) return res.status(404).render('statics/404');
    return recipe.remove();
  })
  //change to return to profile page.
  .then(() => res.redirect('/recipes'))
  .catch(next);
}


module.exports = {
  index: recipeIndex,
  new: recipesNew,
  create: recipesCreate,
  show: recipesShow,
  edit: recipesEdit,
  update: recipesUpdate,
  delete: recipesDelete
};
