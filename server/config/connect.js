const mongoose = require('mongoose');

const dbString = 'mongodb+srv://ashutoshpaliwal26:Ashutosh*12@auth.jfzwqh5.mongodb.net/?retryWrites=true&w=majority&appName=Auth';

const connectToDb = async() => {
  try{
    await mongoose.connect(dbString, {
      dbName : "Social"
    })
    console.log("Conncected Succesfully");
  }catch(err){
    console.log(err);
  }
}

module.exports = connectToDb;