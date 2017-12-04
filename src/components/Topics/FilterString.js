import React, { Component } from 'react';

class FilterString extends Component {
  constructor () {
    super()
    // The initial state of the data
    this.state = {
      unFilteredArray:['tie','cherry','buffalo','lime','arachnid','apple','window','table','tick'],
      userInput: '',
      filteredArray: [],
    }
  }

  handleChange ( val ) {
    this.setState({ userInput: val })
  }

  filterString ( arr, userInput ) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i].slice(0,userInput.length) === userInput) {
            newArr.push(arr[i])
        }
    }

    this.setState({ filteredArray: newArr })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filtered String</h4>
        <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={() => this.filterString(this.state.unFilteredArray, this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray) }</span>
        {/* <span classNAme="filterStringRB">Input: { JSON.stringify(this.state.userInput) }</span> */}
      </div>
    )
  }
}

export default FilterString;