
  const { Schema, model } = require('mongoose');
  const mongoose = require('mongoose')
  const AutoIncrement = require('mongoose-sequence')(mongoose);
  // Create simple post model
  const userSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
      },
     
  },{timestamps: true});
  userSchema.plugin(AutoIncrement, {id:'userId',inc_field: 'id'});
  const User = model('user', userSchema);
  module.exports = User;