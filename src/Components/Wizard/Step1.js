import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Step1 extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return (
          <div className="house_container">


<form>
          <label>Property Name</label>
          <input
            placeholder={this.state.name}
            onChange={e => {
              this.setState({
                name: e.target.value
              });
            }}
          />
          <label>Address</label>
          <input
            placeholder={this.state.address}
            onChange={e =>
              this.setState({
                address: e.target.value
              })
            }
          />
          <label>City</label>
          <input
            placeholder={this.state.city}
            onChange={e =>
              this.setState({
                city: e.target.value
              })
            }
          />
          <label>State</label>
          <input
            placeholder={this.state.state}
            onChange={e =>
              this.setState({
                state: e.target.value
              })
            }
          />
          <label>Zipcode</label>
          <input
            placeholder={this.state.zip}
            onChange={e =>
              this.setState({
                zip: e.target.value
              })
            }
          />
        </form>


              <Link to="/wizard/step2">
                <button>Next Step</button>
              </Link>
          </div>
        );
      }
    }