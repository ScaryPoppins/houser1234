const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express();
const { getHouses} = require("./controller");

const {SERVER_PORT, CONNECTION_STRING} = process.env;


app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log(`Database Connected :)`);
})

app.get("/api/houses", getHouses);

app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`));