import React, { Component } from "react"
import { Link } from "react-router-dom"
import House from "../House/House"
import store, {ADD_HOUSE} from "../../store";
import axios from "axios";


export default class Dashboard extends Component {

    constructor(props) {
      super(props);
       this.state = {
        houses: []
       }
    }
    async componentDidMount() {
      const reply = await axios
        .get("/api/houses")
        .catch(error => console.log(error));
      console.log(reply);
      this.setState({ houses: reply.data });
      store.subscribe(() => {
        this.setState({ houses: store.getState().houses });
      });
      const action = {
        type: ADD_HOUSE,
        payload: reply.data
      };
      store.dispatch(action);
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
           
            <House house={house}/>
      
          </div>
        ))}
      </main>
      )
    }
}  