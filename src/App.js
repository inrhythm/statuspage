import React, { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      overAllStatus: "All System Operational"
    };

  }

  ListOfAllSystems(){
    return [
      {
        header: "InRhythm Website",
        url: "https://www.inrhythm.com"
      },
      {
        header: "InRhythm Github Page",
        url: "https://www.inrhythm.com"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h3>InRhythm</h3>
        <OverAllStatus status={this.state.overAllStatus}/>// TODO:- convert to component
        <StatusList list={this.ListOfAllSystems()}/>
      </div>
    );
  }
}

const OverAllStatus = (props) => <p>{props.status}</p>;

const StatusList = (props) =>  {
  const ListNumber = props.list.map((system) => {
    return <li><span>{system.header}</span><span>{system.url}</span></li>
  });
  return (
    <div>
      props.list.
      <ul>

        <li><span>Github InRhythm</span><span>Status</span></li>
        <li><span>Github InRhythm</span><span>Status</span></li>
        <li><span>Github InRhythm</span><span>Status</span></li>
      </ul>
    </div>
  )
};

export default App;
