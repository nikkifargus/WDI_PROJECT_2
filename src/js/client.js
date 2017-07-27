console.log('client log!');

$(() => {
  $('.inspirationLoad').append('<h1>Get some Inspiration</h1>');
  $
  .get('http://api.yummly.com/v1/api/recipes?_app_id=336eb706&_app_key=2345f4bf66c4925c8eef59b889c4816d&q=&allowedCourse[]=course^course-Desserts&maxResult=4')
  .done(data => {
    data.matches.forEach(recipe => {
      $(`<div>
          <div class="inspirationName">
            ${recipe.recipeName}
          </div>
          <div style="display: none;">
            ${recipe.id}
          </div>
          <div class="inspirationPhoto">
              <img src="${ recipe.smallImageUrls}">
          </div>
        </div>`)
    .appendTo($('.inspirationLoad'));

    });
    $('.inspirationName').on('click', function(e){
      $('.inspirationLoad').hide();
      // console.log('clicked');
      console.log($(e.target).siblings()[0].innerHTML.split(' ').join(''));
      var recipeId = $(e.target).siblings()[0].innerHTML.split(' ').join('');
      $
      .get(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=336eb706&_app_key=2345f4bf66c4925c8eef59b889c4816d`)
      .done(data =>{
        console.log(data);
        $('.inspDetails').append(`<h1>${data.name}</h1>`);
        $('.inspDetails').append(`<h3>Made by: ${data.source.sourceDisplayName}</h3><h5><a href=${data.source.sourceRecipeUrl}>Click Full Recipe</a></h5>`);
        $('.inspIngredients').append(`<h2>Ingredients</h2>`);
        $('.inspIngredients').append('<ul></ul>');
        data.ingredientLines.forEach(ingredient =>{
          $('.inspIngredients ul').append(`<li>${ingredient}</li>`);
        });
        $('.inspShowImg').append(`<img src="${data.images['0'].hostedLargeUrl}">`);

      });
    });
  })
  .fail(() => console.log('error'));
});





//
// .get(`http://api.yummly.com/v1/api/recipe/${recipe.Id}?_app_id=336eb706&_app_key=2345f4bf66c4925c8eef59b889c4816d`)
// .done.forEach(recipe =>{})
