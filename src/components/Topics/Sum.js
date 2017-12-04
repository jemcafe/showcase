import React, { Component } from 'react';

class Sum extends Component {
  constructor () {
    super()
    this.state = {
        number1: 0,
        number2: 0,
        sum: null,
    }
  }

  handleChange ( propName, val ) {
      if ( propName === 'number1') {
        this.setState({ number1: val })
      } else {
        this.setState({ number2: val })
      }
  }

  add ( num1, num2 ) {
    let sum
    num1 = parseInt(num1, 10)
    num2 = parseInt(num2, 10)
    sum = num1 + num2
    this.setState({ sum: sum })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(e) => this.handleChange('number1', e.target.value)}/>
        <input className="inputLine" onChange={(e) => this.handleChange('number2', e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.add(this.state.number1, this.state.number2)}>Add</button>
        <span className="resultsBox">Sum: { JSON.stringify(this.state.sum) }</span>
        {/* <span className="">Input: { JSON.stringify(this.state.number1) }</span>
        <span className="">Input: { JSON.stringify(this.state.number2) }</span> */}
      </div>
    )
  }
}

export default Sum;