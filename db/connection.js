const mongoose = require('mongoose')
require('dotenv').config();

const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
                  
// console.log(`MONGO_URI: ${process.env.MONGO_URI}`);         
// mongoose.connection.on('connected', () => {
// console.log(`Connected to database ${connectionString}`);
// })
                  
                  
// mongoose.connection.on('disconnected', () => {
// console.log(`Disconnected from database ${connectionString}`);
// })
                  
                  
// mongoose.connection.on('error', (error) => {
// console.log(`Error connecting to ${connectionString}`);
// console.error(error);
// })
                  
module.exports = mongoose