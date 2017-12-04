import React, { Component } from 'react';

class DNACompliment extends Component {
  constructor () {
    super()
    this.state = {
      userInput: '',
      newStrand: '',
    }
  }

  handleChange ( val ) {
    val = val.toUpperCase()
    this.setState({ userInput: val })
  }

  findCompliment ( str ) {
    let newStr = str.split('')
    
      for ( var i = 0; i < str.length; i++) {
        newStr[i] = newStr[i].toUpperCase()
             if ( newStr[i] === 'A' ) { newStr[i] = 'T' }
        else if ( newStr[i] === 'T' ) { newStr[i] = 'A' }
        else if ( newStr[i] === 'C' ) { newStr[i] = 'G' }
        else if ( newStr[i] === 'G' ) { newStr[i] = 'C' }
      }

    newStr = newStr.join('')
    console.log(newStr)
    
    this.setState({ newStrand: newStr })
  }

  render () {
      return (
          <div className="puzzleBox filterStringPB">
            <h4>DNA Compliment</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={() => this.findCompliment(this.state.userInput)}>Match</button>
            <span className="resultsBox">DNA Strand: { JSON.stringify(this.state.newStrand) }</span>
            {/* <span className="">Input: { JSON.stringify(this.state.userInput) }</span> */}
          </div>
      )
  }
}

export default DNACompliment;