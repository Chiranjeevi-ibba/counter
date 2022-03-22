import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => {
      console.log('Increment');
      this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
      console.log('Decrement');
      this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const { count } = this.state;
    return (
      <div className="main-container">
        <h1 className="counter-text-style">Counter </h1>
        <h3 className="count-style">{count}</h3>
        <div className="btn-containers">
          <button onClick={this.onDecrement} className="btns">Decrease</button>
          <button onClick={this.onIncrement} className="btns">Increase</button>
        </div>
      </div>
    );
  }
}

export default Counter;
