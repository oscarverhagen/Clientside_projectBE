

    const { Schema, model } = require('mongoose');
// Create simple post model
const buildingSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});
const Building = model('building', buildingSchema);
module.exports = Building;
