import React, { Component } from 'react';

class Palindrome extends Component {
  constructor () {
      super()
      this.state = {
        userInput: '',
        palindrome: '',
      }
  }

  handleChange ( val ) {
    this.setState({ userInput: val })
  }

  trueOrFalse ( userInput ) {
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');
    if ( userInput !== '' ) {
      if ( forwards === backwards ) {
        this.setState({ palindrome: 'true' });
      } else  {
        this.setState({ palindrome: 'false' });
      }
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.trueOrFalse(this.state.userInput)}>Filter</button>
        <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome) } </span>
        {/* <span className="">Input: { JSON.stringify(this.state.userInput) } </span> */}
      </div>
    )
  }
}

export default Palindrome;