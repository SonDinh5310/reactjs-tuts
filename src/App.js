import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; // khai object state chua date = new Date()
  }
  // setup lifecycle

  // chay sau khi component da duoc render ra DOM
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() }); // su dung setState de update component
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
