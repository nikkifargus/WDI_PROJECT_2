const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURL);

const User = require('../models/user');

User.collection.drop();

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
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
