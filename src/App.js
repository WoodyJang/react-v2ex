import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Footer from './components/footer'
import MainBox from './components/mainbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="background">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
