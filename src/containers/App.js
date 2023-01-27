import React, { Component } from 'react';
import User from './User';
import Experience from './Experience';
import Education from './Education';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="md:w-4/5 md:h-screen md:border-2 md:border-black my-0 mx-auto ">
        <User />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
