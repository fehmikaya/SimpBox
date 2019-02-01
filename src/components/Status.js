import React, { Component } from "react";

class Status extends Component {

  state = {
    data: null,
    intervalIsSet: false
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {

    this.setState({ data: "STARTED" })
  /*
    fetch("/api/v1/clusters/Sandbox/services/HDFS", {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa("maria_dev:maria_dev"),
      }
    })
      .then(data => data.json())
      .then(res => this.setState({ data: res.ServiceInfo.state }));
*/
  };

  render() {
    const { data } = this.state;
    return (
        <div>{data}</div>
    );
  }
}

export default Status;