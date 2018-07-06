import React, {Component} from 'react';
import Header from './Components/Header/Header';
import OverAllStatus from './Components/OverAllStatus/OverAllStatus';
import AllSystemStatus from './Components/AllSystemStatus/AllSystemStatus'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    Promise.all(this.props.urls.map(url => fetch(url)))
      .then((resp) => this.setState({allSystemsList: resp}))
  }

  getOverAllStatus() {
    let areAllSystemsOperational = true;

    this.state.allSystemsList.forEach((system) => {
      if (system.status !== 200) {
        areAllSystemsOperational = false;
      }
    });
    console.log(areAllSystemsOperational);

    return areAllSystemsOperational;
  }

  render() {
    return (
      <div className="App">

        <Header/>

        {
          this.state.allSystemsList &&
          <OverAllStatus overAllStatus={this.getOverAllStatus()}/>
        }

        {
          this.state.allSystemsList &&
          <AllSystemStatus allSystemStatus={this.state.allSystemsList}/>
        }

      </div>
    );
  }
}

export default App;
