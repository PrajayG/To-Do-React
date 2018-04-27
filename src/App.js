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
        <div className="six columns">
          <Header/>
          <TextEntry value={this.state.value} onChange={this.handleChange} />
          <Submit name="Add To-Do" onClick={this.addToDo} />
          <List list={this.state.list} onClick={this.deleteEntry} />
          <h3> Completed Items</h3>
          <DeletedItems list={this.state.deletedEntries} />
        </div>
        <div className="six columns">
          <Pomodoro />
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
    this.state = {
      date: 1500,
      timerStarted: false,
    };
  }

  startTimer() {
    console.log('hello')
    console.log(this.state.timerStarted)
    if (this.state.timerStarted == false) {
      this.setState({
        timerStarted: true
      })
      console.log(this.state.timerStarted)
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  stopTimer() {
    clearInterval(this.timerID);
    this.setState({
      timerStarted: false
    })
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

  pauseTimer() {
    this.setState({
      date: this.state.date,
      timerStarted: false
    })
      clearInterval(this.timerID)
  }

  setTime(n) {
    clearInterval(this.timerID);
    this.setState({
      date: n,
      timerStarted: false
    })
  }

  render() {
    return (
    <div className="pomodoro">  
      <div className="container">
        <div className="row">
          <div className="six columns">  
            <h1 className="pomo-timer"> {this.formatNumber(this.state.date)} </h1>
          </div>

          <div className="six columns">
            <ButtonTime time="5 Minutes" onClick={() => this.setTime(300)} ></ButtonTime>
            <ButtonTime time="25 Minutes" onClick={() => this.setTime(1500)}> </ButtonTime>
            
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <button onClick={() => this.startTimer()}> <i class="fas fa-camera-retro"></i> </button> 
            <button onClick={() => this.stopTimer()}> Stop </button>
            <button onClick={() => this.pauseTimer()}> Pause </button>
          </div>
          <div className="six columns">
            <ButtonTime time="60 MInutes" onClick={() => this.setTime(3600)}> </ButtonTime>
          </div>
        </div>
          {/* Note that the above is passed as a function, this ensures that it doesn't 
          continuously call */}
      </div>
    </div>
    )
  }
}


class ButtonTime extends Component {

  render() {
    return (
      <button onClick={() => this.props.onClick()} > {this.props.time} </button>
    )
  }

}

export default App;

