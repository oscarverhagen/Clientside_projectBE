// reads the .env file and stores it as environment variables, use for config
require('dotenv').config()

//const connect = require('./connect')

const mongoMemoryServer = require('./src/mongomemoryserver')
const app = require('./src/app')

// the order ofnpm  starting the app and connecting to the database does not matter
// since mongoose buffers queries till there is a connection

// start the app
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
// app.get("/", (req, res) => {
//     res.json({message: "Welcome to the Flexplex backend!"});
// });
// connect to the databases

mongoMemoryServer.connect();
//mongoMemoryServer.seedTables();