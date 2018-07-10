import React, { Component } from 'react';

import StatusWidgetContainer from '../components/StatusWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <StatusWidgetContainer href="http://localhost:3001/status/InRhythm.com" heading="InRhythm.com" max="50" min={10} value={15} />
                <StatusWidgetContainer href="http://localhost:3001/status/slack" heading="Slack" />
                <StatusWidgetContainer href="http://localhost:3001/status/GitLab" heading="GitLab" />
                <StatusWidgetContainer href="http://localhost:3001/stats/InRhythmBlog" heading="InRhythm Blog" />
                <ListWidgetContainer href="http://localhost:3001/stats/top" heading="Top Clients" colspan={2} rowspan={2} />
                <GraphWidgetContainer href="http://localhost:3001/tickets/progression" heading="Position Over Time" colspan={2} rowspan={2} />
            </div>
        );
    }
}

export default App;