import React, {Component} from 'react';
import Header from './Components/Header/Header';
import OverAllStatus from './Components/OverAllStatus/OverAllStatus';
import AllSystemStatus from './Components/AllSystemStatus/AllSystemStatus';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getErrorResp(e){
    return e.response;
  }

  getPromise(url){
    return axios.get(url).catch(this.getErrorResp)
  }

  getData() {
    Promise.all(this.props.urls.map(url => this.getPromise(url)))
      .then((resp) => this.setState({allSystemsList: resp}))
  };

  getOverAllStatus() {
    let areAllSystemsOperational = true;

    this.state.allSystemsList.forEach((system) => {
      if (system.status !== 200) {
        areAllSystemsOperational = false;
      }
    });

    return areAllSystemsOperational;
  }

  componentDidMount() {
    this.getData();
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
