import React, { Component } from 'react';

import axios from 'axios';

import NumberWidget from '../components/StatusWidget';

class StatusWidgetContainer extends Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            status: undefined,
            code: undefined
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData().then(_ => {
            this.interval = setInterval(this.getData, 60000);
        });
    }

    getData() {
        this.setState({ loading: true });

        return axios.get(this.props.href)
            .then(response => {
                let newState = { loading: false };
                newState["status"] = "Is Active";
                newState["code"] = "green";
                this.setState(newState);
            })
            .catch(error => {
                let newState = { loading: false };
                if(error.response.status >= 400 && error.response.status < 500){
                    newState["status"] = "In-Active";
                    newState["code"] = "amber";
                }
                else {
                    newState["status"] = "Is Down";
                    newState["code"] = "red";
                }                this.setState(newState);
            });
    }

    render() {
        return (
            <NumberWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} min={this.state.min} max={this.state.max} status={this.state.status} code={this.state.code} />
        );
    }
}

StatusWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

export default StatusWidgetContainer;