import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Details from './components/details'
import Header from './components/Nav'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
      present: false
      
    }
  }

  changestate = () => {
    const { present } = this.state;
    if (present) {

      this.setState({ present: false });
    }
    else {
      this.setState({ present: true });
    }
   }
 


  render() {
    const { items,isLoaded ,present} = this.state;
 
    if (!present) {
      return (
        <div className="notes-page">
          <Header changestate={this.changestate} />
          </div>
      )
    }
    else {
      return (
        <div className="notes-page">
          <Header changestate={ this.changestate}/>
          <div className="note-wrapper">
            <Details />
          </div>
        </div>
      );
    }
  }

}

export default App;




