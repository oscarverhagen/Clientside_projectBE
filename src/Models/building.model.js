const { Schema, model } = require('mongoose');

const mongoose = require('mongoose')

const AutoIncrement = require('mongoose-sequence')(mongoose);

// Create simple post model

const buildingSchema = new Schema({

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

buildingSchema.plugin(AutoIncrement, {id:'buildingId',inc_field: 'id'});




const Building = model('building', buildingSchema);



module.exports = Building;