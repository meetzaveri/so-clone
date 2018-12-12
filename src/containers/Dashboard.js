import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions/posts";
import Dashboard from "../components/dashboard";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchedPosts: null };
  }

  componentDidMount() {
    const dummyurl = "";
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    this.props.fetchPostsAction(dummyurl, config);
  }

  static getDerivedStateFromProps(props, state) {
    const { fetchedPosts } = state;
    if (fetchedPosts === null) {
      if (props.fetchPosts.dataFetched === true) {
        console.log("posts", props.fetchPosts);
        return {
          fetchedPosts: props.fetchPosts.response
        };
      }
    }
    return null;
  }

  render() {
    const { fetchPosts } = this.props;

    const globalState = { fetchPosts };
    const internalState = this.state;
    return (
      <>
        <Dashboard globalState={globalState} internalState={internalState} />
      </>
    );
  }
}

DashboardContainer.propTypes = {
  fetchPosts: PropTypes.object.isRequired,
  fetchPostsAction: PropTypes.func
};

const mapStateToProps = state => {
  return {
    fetchPosts: state.fetchPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsAction: (url, config) => dispatch(fetchPosts(url, config))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
