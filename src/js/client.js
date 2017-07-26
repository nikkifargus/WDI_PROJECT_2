console.log('client log!');

// $
// .get('http://api.yummly.com/v1/api/recipes?_app_id=336eb706&_app_key=2345f4bf66c4925c8eef59b889c4816d&q=&allowedCourse[]=course^course-Desserts&maxResult=50', function(data,i){
//   for (i = 0; i < data.matches.length; i++) {
//     console.log(data.matches[i].recipeName);
//   }
//
//   for (i = 0; i < data.matches.length; i++) {
//     $('.inspirationLoad').text(data.matches[i].recipeName);
//   }
// });

$(() => {
  $
  .get('http://api.yummly.com/v1/api/recipes?_app_id=336eb706&_app_key=2345f4bf66c4925c8eef59b889c4816d&q=&allowedCourse[]=course^course-Desserts&maxResult=50')
  .done(data => {
    data.matches.forEach(recipe => {
      $(`<li>${recipe.recipeName}<img src="${ recipe.smallImageUrls}">`).appendTo($('.inspirationLoad'));
    });
  })
  .fail(() => console.log('error'));

});
