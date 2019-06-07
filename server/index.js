const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express();
const { getHouses, addHouse, deleteHouse} = require("./controller");

const {SERVER_PORT, CONNECTION_STRING} = process.env;


app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log(`Database Connected :)`);
})

app.get("/api/houses", getHouses);
app.post("/api/house", addHouse);
app.delete("/api/house/:id", deleteHouse);

app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`));