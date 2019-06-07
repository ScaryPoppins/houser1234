import React, { Component } from "react"
import "./App.css"
import routes from "./routes"
import Header from "./Components/Header/Header"

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <div>{routes}</div>
        </div>
      </div>
    );
  }
}

export default App;
