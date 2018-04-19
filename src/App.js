import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list :['Hello', 'Whats going on'],
      currentEntry : '',
      value: '',
    }

    this.addToDo = this.addToDo.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addToDo(event) {
    const newList = ['Hello', this.state.value];
    const newEntry = this.currentEntry
    this.setState({list: newList});
  }

  handleChange(event) {
    console.log('Hello')
    this.setState({ value: event.target.value})
    console.log(event.target.value)
  }


  render() {

    return (
      <div className="App">
        <TextEntry
          value = {this.state.value}
          onChange ={this.handleChange}
        />
        <Submit 
          name='Hello'
          onClick={this.addToDo}
        />
        <List list={this.state.list}/>
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
          value= {this.props.currentEntry}
          onChange = {this.props.onChange} />
      </div>
    )
  }
}


class List extends Component {
  render() {
    return (
    <div>  
      {this.props.list.map(item => <p key={item.objectID}> {item} </p>)} 
    </div>  
    )
  }
}

class Submit extends Component {
  render() {
    return (
      <button 
        onClick={() => this.props.onClick()}

      > 
        {this.props.name}
      </button>
    )
  }
}

export default App;

// Component lists //


App
// text-entry // button

// to-do-list