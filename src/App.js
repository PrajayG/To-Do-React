import React, { Component } from "react";

// **TO DO**
// Add Pomodoro Timer
// 

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Hello", "Whats going on"],
      currentEntry: "",
      value: "",
      deletedEntries: [],
      timer: 'Hello',
    };

    this.addToDo = this.addToDo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);

  }

  addToDo(event) {
    const newList = [...this.state.list, this.state.value];
    const newEntry = this.currentEntry;
    this.setState({ list: newList });
    this.setState({ value: "" });
  }

  handleChange(event) {
    console.log("Hello");
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  deleteEntry(item) {
    console.log(item)
    const isItem = placement => placement !== item;
    const updatedList = this.state.list.filter(isItem);
    this.setState({ list: updatedList, deletedEntries: [...this.state.deletedEntries, item] })
  }




  render() {
    return (
      <div className="App container">
        <TextEntry value={this.state.value} onChange={this.handleChange} />
        <Submit name="Add To-Do" onClick={this.addToDo} />
        <List list={this.state.list} onClick={this.deleteEntry} />
        <h3> Completed Items</h3>
        <DeletedItems list={this.state.deletedEntries} />
        <Pomodoro time={this.state.timer} startTimer={this.startTimer} />
      </div>
    );
  }
}

class TextEntry extends Component { 
  render() {
    return (
      <div className="textbox">
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(item => (
          <div className="row">
            <div className="one-half column">
              <p key={item.objectID}> {item} </p> 
            </div>
            <div className="one-half column">
              <button onClick={() => this.props.onClick(item)} >Completed</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class DeletedItems extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(item =>
          <p className="deleted-items" key ={item}> {item}</p>
        )}
      </div>
    )
  }
}

class Submit extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.name}
      </button>
    );
  }
}

class Pomodoro extends Component {

  constructor(props) {
    super(props);
    this.state = {date: 500};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: this.state.date - 1
    });
  }

  formatNumber(n) {
    var minutes = parseInt(n / 60, 10)
    var seconds = parseInt(n % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.formatNumber(this.state.date)}.</h2>
      </div>
    );
  }
}
export default App;
