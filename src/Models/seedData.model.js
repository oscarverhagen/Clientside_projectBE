//const Building = require('./building.model')
const buildings = [
  {
   // id:1,
    name:"LA",
    address:"Spuistraat 1a",
    city:"Breda",
  },
  {
   // id:2,
    name:"LB",
    address:"Spuistraat 1b",
    city:"Breda",
  },
  {
   // id:3,
    name:"LC",
    address:"Spuistraat 1c",
    city:"Breda",
  },
  {
   // id:4,
    name:"LA",
    address:"Ginnekenweg 2a",
    city:"Rotterdam",
  },
  {
   // id:5,
    name:"LB",
    address:"Ginnekenweg 2b",
    city:"Rotterdam",
  },
];

const rooms = [
  {
   // id:1,
   building_id: 1,
    name:"room1",
    size: 32,
    space: 32,
    type: 'Study',
  },
  {
   // id:2,
   building_id: 2,
   name:"room2",
   size: 32,
   space: 15,
   type: 'Work',
  },
  {
   // id:3,
   building_id: 1,
   name:"room3",
   size: 32,
   space: 32,
   type: 'Work',
  },
];
    
module.exports = {buildings, rooms};
