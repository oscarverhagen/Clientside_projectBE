const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Create simple post model
const bookingSchema = new Schema({
  buildingId: {type: Schema.Types.Number, ref: "Building"},
  room_id: {type: Schema.Types.Number, ref: "Room"},
  user_id: {type: Schema.Types.Number, ref: "User"},
  date: {
    type: Date,
    required: true,
  },
   
},{timestamps: true});
bookingSchema.plugin(AutoIncrement, {id:'bookingId',inc_field: 'id'});
const Booking = model('booking', bookingSchema);
module.exports = Booking;