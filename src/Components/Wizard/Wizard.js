import React, { Component } from "react"
import { Link, Route, Switch } from "react-router-dom"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"


export default class Wizard extends Component {
 
  render() {
    return (
      <main className="house_container">
         <div className="sub_header">
          <h1>Add New Property</h1>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>

        <Switch>
          <Route path="/wizard/step1" component={Step1} />
          <Route path="/wizard/step2" component={Step2} />
          <Route path="/wizard/step3" component={Step3} />
        </Switch>

      </main>
    );
  }
}
