import React, { Component } from 'react';
import Header from './Components/Header/Header';
import OverAllStatus from './Components/OverAllStatus/OverAllStatus';
import AllSystemStatus from './Components/AllSystemStatus/AllSystemStatus'

const URLS = ['https://www.inrhythm.com/fghjlkds', 'https://www.inrhythm.com/'];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    Promise.all(URLS.map(url => fetch(url)))
      .then((resp) =>  this.setState({allSystemsList: resp}))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <OverAllStatus />
        {
          this.state.allSystemsList &&
          <AllSystemStatus allSystemStatus={this.state.allSystemsList} />
        }

      </div>
    );
  }
}

export default App;
