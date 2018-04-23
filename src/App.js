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
    const newList = [...this.state.list, this.state.value];
    const newEntry = this.currentEntry
    this.setState({list: newList});
    this.setState({value: ''})
  }

  handleChange(event) {
    console.log('Hello')
    this.setState({ value: event.target.value})
    console.log(event.target.value)
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <div className="to-do-bar">
            <TextEntry
              className="TextEntry"
              value = {this.state.value}
              onChange ={this.handleChange}
            />
            <Submit 
              className="SubmitButton"
              name='Hello'
              onClick={this.addToDo}
            />
          </div>
            <List list={this.state.list}/>
         
        </div>
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
          value= {this.props.value}
          onChange = {this.props.onChange} />
      </div>
    )
  }
}


class List extends Component {
  render() {
    return (
      <div>  
        {this.props.list.map(item => <p key={item.objectID}> {item}  <Delete /></p>)} 
        
      </div>  
    )
  }
}

class Submit extends Component {
  render() {
    return (
      <div className="submitbutton">
        <button 
          onClick={() => this.props.onClick()}
        > 
          {this.props.name}
        </button>
      </div>
    )
  }
}

class Delete extends Component {
  render() {
    return (
      <div className="deletebutton">
        <button>
          Delete
        </button>
      </div>
    )
  }
}

export default App;

// Component lists //


App
// text-entry // button

// to-do-list