import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(){
    super()
     this.state ={
      counter: 0,
    }
  }
  pauseCount =()=>{
   let counter=this.state.counter ;
   this.setState({
     counter
    });
 }
 resetCount =()=>{
  let counter=0 ;
  this.setState({
    counter
  });
}
  interval=()=>{setInterval(() => {
    console.log(this.counter)
    let counter =this.state.counter + 1
    this.setState({
      counter
      })
     }, 1000);
  }
  render(){
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}  </h1>
        <div className="controls">
          <button onClick={this.resetCount}> Reset </button>
          <button onClick={this.interval} >Start</button>
          <button onClick={this.pauseCount}>Pause</button>
        </div>
      </div>
    );
  }
}
export default Stopwatch;

