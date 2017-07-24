module.exports = {
  port: process.env.PORT || 3000,
  dbURI: process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2',
  secret: process.env.SESSION_SECRET || 'its a secret'
};
