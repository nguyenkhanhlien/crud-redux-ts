import React, { Component } from 'react';
import './App.css';
import AddPostContainer from './container/AddPost'
import AllPostContainer from './container/AllPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPostContainer />
        {/* <AllPostContainer /> */}
      </div>
    );
  }
}

export default App;
