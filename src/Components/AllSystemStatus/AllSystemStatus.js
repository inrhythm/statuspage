import React, {Component} from 'react';
import StatusImage from '../StatusImage/StatusImage';
import './AllSystemStatus.scss';

class AllSystemStatus extends Component {
  render() {

    const SystemSatus = this.props.allSystemStatus.map((systemStatus, index) => {
      return <li key={index} className="AllSystemStatus-li">
        <span>
          {systemStatus.url}
        </span>
        <span className="AllSystemStatus-span-img">
          <StatusImage statusCode={systemStatus.status}/>
        </span>
      </li>
    });

    return (
      <ul className="AllSystemStatus-ul">
        {SystemSatus}
      </ul>
    );
  }
}

export default AllSystemStatus