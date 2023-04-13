require('dotenv').config();

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT || 3001
};

console.log('MONGODB_URI:', config.MONGODB_URI);

module.exports = config;
