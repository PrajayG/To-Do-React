import React, { Component } from "react";

// **TO DO**
// Add Pomodoro Timer
// 

import logo from "./logo.svg";
import "./App.css";
import Pomodoro from './pomodoro';
import Weather from './weather';
import QuoteGenerator from "./api";
import HackerNews from "./hackernews";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Take out bins", "Clean dishes"],
      currentEntry: "",
      value: "",
      deletedEntries: [],
      timer: 'Hello',
    };

    this.addToDo = this.addToDo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.undoAdd = this.undoAdd.bind(this)

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
    this.setState({ list: updatedList, deletedEntries:[...this.state.deletedEntries, item]})
  }

  undoAdd(item) {
    console.log(item)
    const isItem = placement => placement !== item;
    const newList = this.state.deletedEntries.filter(isItem)
    this.setState({ list: [...this.state.list, item], deletedEntries: newList})
  }


  render() {
    return (
      <div className="App container">
        <div className="column">
          <Header/>
          <TextEntry value={this.state.value} onChange={this.handleChange} />
          <Submit name="Add To-Do" onClick={this.addToDo} />
          <List list={this.state.list} onClick={this.deleteEntry} />
          <h3> Completed Items</h3>
          <DeletedItems list={this.state.deletedEntries} function={this.undoAdd} />
        </div>
        <div className="column">
          <Pomodoro />
          <QuoteGenerator />
          <Weather />
          <HackerNews />
          
        </div>    
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
    <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous"/>
    </head>
  )
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
            <div className="column to-do-item">
              <p key={item.objectID}> {item} </p> 
            </div>
            <div className="column">
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
          <p className="deleted-items" key ={item}> {item} - COMPLETED <button onClick ={() => this.props.function(item)}>Un-Do</button></p>
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


export default App;

