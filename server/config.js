/*module.exports = {

  // Server runs on this port

  PORT: 5001,

  // Secret key used to sign JWT tokens

  JWT_SECRET_KEY: "SivaXYZ",

  // MongoDB connection string

  MONGO_URI: "mongodb+srv://sivanarayana:sivanarayana@easygadget.t4b1lox.mongodb.net/easygadget?retryWrites=true&w=majority",
};*/
module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  MONGO_URI: process.env.MONGO_URI,
};
