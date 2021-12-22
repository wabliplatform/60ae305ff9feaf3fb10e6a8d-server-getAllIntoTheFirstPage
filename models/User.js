
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
Underscoreid:String , 

userName:String , 

userEmail:String 


})

module.exports = {
  User : mongoose.model('User', userSchema),
}

