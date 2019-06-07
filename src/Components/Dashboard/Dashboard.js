import React, { Component } from "react"
import { Link } from "react-router-dom"
import House from "../House/House"
import axios from "axios";

export default class Dashboard extends Component {

    constructor() {
      super();
       this.state = {
        houses: []
       }
    }



    render() {
      return (
        <main className="house_container">
        <div className="sub_header">
          <h1>Dashboard</h1>
          <Link to="/wizard/step1">
            <button>Add New Property</button>
          </Link>
        </div>
        {console.log(this.state.houses)}
        {this.state.houses.map((house, index) => (
          <div key={index}>
            <House house={house} />
          </div>
        ))}
      </main>
      )
    }
}  