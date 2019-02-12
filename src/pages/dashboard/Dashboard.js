import React, { Component } from "react";
import Status from '../../components/Status'

class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard:
                <b>HDFS Status</b><Status/>
            </div>
        );
    }
}

export default Dashboard;