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
    // can phai bind this vs this.handleClick trc khi pass sang onClick neu ko se bi undefined
    console.log(this);
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
  //* Cach khac ko dung bind
  // Class field syntax
  /*  
    handleClick = () => {    
      console.log('this is:', this);  
    }
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    } */

  // arrow function
  /*
      handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>        
        Click me
      </button>
    );
  }
    */
}

export function ListExample(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

export function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "children" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <br />
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

const scaleNames = {
  c: "Celsisus",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temparature, convert) {
  const input = parseFloat(temparature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemparatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { temparature: "" };
  }

  handleChange(e) {
    // this.setState({ temparature: e.target.value });
    this.props.onTemparatureChange(e.target.value);
  }

  render() {
    const temparature = this.props.temparature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temparature in {scaleNames[scale]}:</legend>
        <input value={temparature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  render() {
    return (
      <div>
        <TemparatureInput scale="c"></TemparatureInput>
        <TemparatureInput scale="f"></TemparatureInput>
      </div>
    );
  }
}
