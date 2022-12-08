const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const roomSchema = new Schema({
  
 
  building_id: {
   // type: Schema.Types.Number, ref: "Building"
   type: Number,
   required: true,
    },
    name: {
        type: String,
        required: true,
      },
  size: {
    type: Number,
    required: true,
  },
  space: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
roomSchema.plugin(AutoIncrement, {id:'roomId',inc_field: 'id'});
const Room = model('room', roomSchema);
module.exports = Room;