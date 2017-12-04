import React, { Component } from 'react';

class FilterObject extends Component {
  constructor () {
    super()
    // The initial state of the data
    this.state = {
        unFilteredArray: [
            {
                name: 'Jake',
                height: '6 ft',
                juice: '',
                hair: 'black'
            },
            {
                name: 'Kim',
                juice: 'cranberry',
                pants: 'jeans',
                points: 32,
            },
            {
                name: 'Ade',
                age: 24,
                juice: 'orange',
                sport: 'rugby',
            },
        ],
        userInput: '',
        filteredArray: [],
    }
  }

  handleChange ( val ) {
    this.setState({ userInput: val })
  }

  filterObject ( arr, userInput) {
    let filteredArr = []

    for (let i = 0; i < arr.length; i++) {
        for (let index in arr[i]) {
            if (index === userInput) filteredArr.push( arr[i] )
        }
    }

    this.setState({ filteredArray: filteredArr })
  }

  render () {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value ) }/>
        <button className="confirmationButton" onClick={ () => this.filterObject(this.state.unFilteredArray, this.state.userInput) }>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
        {/* <span className="filterObjectRB">Input: { JSON.stringify(this.state.userInput) }</span> */}
      </div>
    )
  }
}

export default FilterObject;
