console.log('client log!');

$(() => {
  $('.yummlyRecipe').hide();
  $
  .get('http://api.yummly.com/v1/api/recipes?_app_id=336eb706&_app_key=2345f4bf66c4925c8eef59b889c4816d&q=&allowedCourse[]=course^course-Desserts&maxResult=50')
  .done(data => {
    data.matches.forEach(recipe => {
      $(`<div><div class="inspirationPhoto"><img src="${ recipe.smallImageUrls}"></div><div class="inspirationName">${recipe.recipeName}</div></div>`).appendTo($('.inspirationLoad'));
    });
    $('.inspirationName').on('click', function(){
      console.log('clicked');
    });
  })
  .fail(() => console.log('error'));
});


//
// .get(`http://api.yummly.com/v1/api/recipe/${recipe.Id}?_app_id=336eb706&_app_key=2345f4bf66c4925c8eef59b889c4816d`)
// .done.forEach(recipe =>{})
