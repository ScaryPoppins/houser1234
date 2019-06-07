const express = require("express")
const app = express()






const getHouses = async (req, res) => {
  const reply = await req.app
    .get("db")
    .get_houses()
    .catch(error => {
      console.log(error);
      res.status(500).json("Server Error");
    });
  res.status(200).json(reply);
};


const addHouse = async (req, res) => {
  const reply = await req.app
    .get("db")
    .add_house([
      req.body.name,
      req.body.address,
      req.body.city,
      req.body.state,
      +req.body.zip,
      req.body.img,
      +req.body.mortgage,
      +req.body.rent
    ])
    .catch(error => {
      console.log(error);
      res.status(500).json("Server Error");
    });
  res.status(200).json(reply);
};



module.exports = {

// getHouses: (req, res) => {
//     db = req.app.get('db')
//    {id} = req.params
  
//    db.get_house()
//    .then(response => res.status(200).json(response))
//    .catch(error => res.status(500).send(`get: ${error}`))
//    res.status(200).json(reply);
//   }, 
  getHouses,
  addHouse
  }