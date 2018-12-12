import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPost } from "../actions/posts";

class ReadPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchedPosts: null };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    const body = {
      id: postId
    };
    console.log("call");
    this.props.fetchPostAction("", body, config);
  }

  static getDerivedStateFromProps(props, state) {
    const { fetchedPosts } = state;
    if (fetchedPosts === null) {
      if (props.fetchPosts.dataFetched === true) {
        console.log("post in fetchpost", props.fetchPosts);
        return {
          fetchedPosts: props.fetchPosts.response
        };
      }
    }
    return null;
  }

  render() {
    const { fetchedPosts } = this.state;
    console.log("fetchedPosts in read post", fetchedPosts);
    return fetchedPosts !== null ? (
      <>
        <div>
          <h1>{fetchedPosts[0].title}</h1>
          <div className="post-answer-body">
            <div className="dib ph2">
              Votes{" "}
              {fetchedPosts[0].upvotes.length -
                fetchedPosts[0].downvotes.length}
            </div>
            <div className="dib ph2 ">{fetchedPosts[0].body}</div>
          </div>
        </div>
      </>
    ) : (
      <></>
    );
  }
}

ReadPostContainer.propTypes = {
  fetchPosts: PropTypes.object.isRequired,
  fetchPostAction: PropTypes.func
};

const mapStateToProps = state => {
  return {
    fetchPosts: state.fetchPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostAction: (url, formData, config) =>
      dispatch(fetchPost(url, formData, config))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadPostContainer);
