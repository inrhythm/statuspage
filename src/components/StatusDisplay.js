import React, { Component } from 'react';

import '../styles/NumberDisplay.css';

class StatusDisplay extends Component {
    render() {
        return (

            <div className="NumberDisplay">
                <span className={this.props.code}></span>
                <span className={this.props.code}></span>
                <span className={this.props.code}></span>
                <span className="max">
                    {this.props.status}
                </span>
            </div>

        );
    }
}

StatusDisplay.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default StatusDisplay;