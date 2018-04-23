import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Hello", "Whats going on"],
      currentEntry: "",
      value: ""
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

    this.setState({ list: updatedList})
  }

  render() {
    return (
      <div className="App container">
        <TextEntry value={this.state.value} onChange={this.handleChange} />
        <Submit name="Hello" onClick={this.addToDo} />
        <List list={this.state.list} onClick={this.deleteEntry} />
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
              <button onClick={() => this.props.onClick(item)} >Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
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

export default App;

// Component lists //

// to-do-list
