import React, { Component } from 'react';
import './index.css';
  // TopicBrowser is the component name and it's getting instruction from the specified location
import TopicBrowser from './components/TopicBrowser/TopicBrowser.js'

class App extends Component {
  render() {
    return (
      <TopicBrowser />
    )
  }
}

export default App;
