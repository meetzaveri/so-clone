import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchPostsAction();
  }
  render() {
    return <div>Dashboard</div>;
  }
}

export default Dashboard;