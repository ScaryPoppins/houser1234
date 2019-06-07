const express = require("express")
const app = express()

const getHouses = async (req, res) => {
  const reply = await req.app
    .get("db")
    .get_houses()
    .catch(error => {
      console.log(error)
      res.status(500).json("Server Error");
    });
  res.status(200).json(reply)
};




module.exports = {
    getHouses
  }