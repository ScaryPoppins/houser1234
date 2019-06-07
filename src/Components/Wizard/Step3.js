import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="house_container">
            <Link to="/wizard/step2">
              <button>Previous Step</button>
            </Link>
            <Link to="/">
              <button>Complete</button>
            </Link>
      </div>
    );
  }
}