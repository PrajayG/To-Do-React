import React from 'react';

class Pomodoro extends React.Component {

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
        timerStarted: false,
        date: 0
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
              <button onClick={() => this.startTimer()}> <i class="fas fa-play"></i> </button> 
              <button onClick={() => this.stopTimer()}> <i class="fas fa-stop"> </i></button>
              <button onClick={() => this.pauseTimer()}> <i class="fas fa-pause"></i> </button>
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
  
  
  class ButtonTime extends React.Component {
  
    render() {
      return (
        <button onClick={() => this.props.onClick()} > {this.props.time} </button>
      )
    }
  
  }

  export default Pomodoro;
