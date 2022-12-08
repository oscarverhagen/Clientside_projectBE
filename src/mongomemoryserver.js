const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Building = require('./models/building.model');
const Room = require('./models/room.model');
const SeedData = require('./models/seedData.model.js')
let mongoServer;
// For mongodb-memory-server's old version (< 7) use this instead:
// const mongoServer = new MongoMemoryServer();
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// Provide connection to a new in-memory database server.
const connect = async () => {
  // NOTE: before establishing a new connection close previous
  await mongoose.disconnect();
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, opts, err => {
    if (err) {
      console.error(err);
    }
  });
};
// Remove and close the database and server.
const close = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};
// Remove all data from collections
const clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany();
  }
};
//Insert Seeddata into the MongoDb InMemory
Building.create(SeedData.buildings, function (err, buildings) {
    if ( err ) throw err;
    console.log( buildings + '\n-- buildings inserted successfully' );
});
Room.create(SeedData.rooms, function (err, rooms) {
  if ( err ) throw err;
  console.log( rooms + '\n-- rooms inserted successfully' );
});
console.log(mongoose.collections);
module.exports = {
  connect,
  close,
  clear,
};