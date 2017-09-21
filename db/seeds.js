const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURL);

const User = require('../models/user');
const Recipe = require('../models/recipe');

User.collection.drop();
Recipe.collection.drop();

User
  .create([{
    username: 'phollywood',
    email: 'paul.hollywood@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'mberry',
    email: 'mary.berry@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'joliver',
    email: 'jamie.oliver@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users)=> {
    console.log(`${users.length} users created!`);

    return Recipe
      .create([{
        name: 'Short Bread',
        image: 'http://www.marshallsfoods.com/wp-content/uploads/shutterstock_153370979-e1452688819427.jpg',
        description: 'A classic Scottish bisuit. Crumbly, buttery and great with a cup of tea!',
        ingredient1: '150g plain flour',
        ingredient2: '100g unsalted butter',
        ingredient3: '50g caster sugar',
        step1: 'Rub fat into flour then add sugar',
        step2: 'Roll out on a floured surface and cut out rounds',
        step3: 'cook at 180C for 20 mins or until golden brown. This will depend on how thin you roll the dough',
        createdBy: users[0]._id
      }, {
        name: 'Berry Smoothie',
        image: 'https://sparkpeo.hs.llnwd.net/e2/guid/5-Minute-Berry-Smoothie/d702b10b-cab7-4bbd-92a6-6cf53d2131b6.jpg',
        description: 'Really easy to make and great for a hot summers day! Added bonus, its pretty healthy!',
        ingredient1: '1/2 Banana',
        ingredient2: '1 handful of frozen berries of your choice',
        ingredient3: 'Fruit juice or water',
        step1: 'Add all the ingredients to a blender',
        step2: 'Blend on full speed for 2 mins',
        step3: 'Pour into a cup and decorate with berries!',
        createdBy: users[1]._id
      }, {
        name: 'Chocolate Ganache',
        image: 'https://images.food52.com/cdBrETI7fBblLujzeBOqNNOQDPI=/753x502/195e6699-a6a9-45ed-bfe4-8e3f216c5787--2014-0107_alice_chocolate-whipped-cream-016.jpg',
        description: 'Chocolate ganache is really easy to make and super versatile. Use on cakes, cookies, macarons or even use to make your own chocolate truffels!',
        ingredient1: '250g dark chocolate',
        ingredient2: '200g double cream',
        ingredient3: '50g butter',
        step1: 'Heat cream and butter until boiling',
        step2: 'Break chocolate into pieces and add to the cream',
        step3: 'Stir until all the chocolate is melted, then allow to cool',
        createdBy: users[1]._id
      }]);
  })
  .then((recipes)=>{
    console.log(`${recipes.length} recipes created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
