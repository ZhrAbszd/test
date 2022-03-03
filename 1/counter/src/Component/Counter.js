import React, { Component } from "react";
import Button from "./Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
  }

  increase() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  decrease() {
    if (this.state.counter > 0) {
      this.setState((state) => ({
        counter: state.counter - 1,
      }));
    }
  }
  reset() {
    this.setState({
        counter: 0,
    });
  }

  render() {
    return (
      <div className="">
        <h1>{this.state.counter}</h1>
        <div className="counter-btn">
          <Button title={"Increase"} clickHandler={this.increase} />
          <Button title={"Reset"} clickHandler={this.reset} />
          <Button title={"Decrease"} clickHandler={this.decrease} />
        </div>
      </div>
    );
  }
}
export default Counter;
