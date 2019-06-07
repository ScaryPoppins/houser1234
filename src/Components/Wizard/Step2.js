import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_STEP2 } from "../../store";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: store.getState().image
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ img: store.getState().img });
    });
  }
  updateStore() {
    let { image } = this.state;
    const action = {
      type: UPDATE_STEP2,
      payload: image
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <form>
          <label>Image URL</label>
          <input
            placeholder={this.state.image}
            onChange={e => {
              this.setState({ image: e.target.value });
            }}
          />
        </form>
        <div>
          <Link to="/wizard/step1">
            <button onClick={() => this.updateStore()}>Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button onClick={() => this.updateStore()}>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}
