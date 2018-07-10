import React, { Component } from 'react';

import Widget from '../components/Widget';
import StatusDisplay from '../components/StatusDisplay';

import '../styles/NumberWidget.css';

class StatusWidget extends Component {
    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                <div className="NumberWidget"> 
                    <StatusDisplay status={this.props.status} code={this.props.code} />
                </div>
            </Widget>
        );
    }
}

export default StatusWidget;