import React, { Component } from "react";
import Status from '../components/Status'

class Home extends Component {
    render() {
        return (
            <div>
                <b>HDFS Status</b><Status/>
            </div>
        );
    }
}

export default Home;