const Recipe = require('../models/recipe');

function commentsCreate(req, res){
  Recipe
  .findById(req.params.id)
  .exec()
  .then(recipe => {
    req.body.user = req.user._id;

    recipe.comments.push(req.body);
    recipe.save();

    res.redirect(`/recipes/${recipe._id}`);
  });
}

function commentsDelete(req, res){
  Recipe
  .findById(req.params.recipeId)
  .exec()
  .then(recipe => {
    const comment = recipe.comments.id(req.params.commentId);
    comment.remove();
    recipe.save();

    res.redirect(`/recipes/${recipe._id}`);
  });
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
