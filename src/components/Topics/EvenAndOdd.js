import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor () {
      // The initial state
      super();
      this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
      };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  divideEvenAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odds</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.divideEvenAndOdds(this.state.userInput) }}> Split </button>
        <span className="resultsBox evens"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox odds"> Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}

export default EvenAndOdd;