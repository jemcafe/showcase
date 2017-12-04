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
    let dnaVal = val.split('')

    // This filters the user's input and only keeps the four DNA letters that matter
    dnaVal = dnaVal.filter((e) => e === 'A' ? e : e === 'T' ? e : e === 'C' ?  e : e === 'G' ?  e : '')
    console.log(dnaVal)

    dnaVal = dnaVal.join('')

    this.setState({ userInput: dnaVal })
  }

  findCompliment ( str ) {
    str = str.toUpperCase()
    let newStr = str.split('')
    
    // This loops through the array and changes the characters to it's compliment
    newStr = newStr.map((e) => e === 'A' ? 'T' : e === 'T' ? 'A' : e === 'C' ?  'G' : e === 'G' ?  'C' : '')

    newStr = newStr.join('')
    
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