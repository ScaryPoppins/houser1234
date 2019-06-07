import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Step2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

  render() {
    return (
      <div className="house_container">
            <Link to="/wizard/step1">
            <button>Previous Step</button>
            </Link>
           <Link to="/wizard/step3">
            <button>Next Step</button>
          </Link>
      </div>
    );
  }
}