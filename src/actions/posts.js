import axios from "axios";
import { ApiCallForFetchPosts, ApiCallForFetchPost } from "../services/index";

export function fetchPostsError(bool, error) {
  return {
    type: "FETCH_POSTS_ERROR",
    hasError: bool,
    error
  };
}

export function fetchPostsInProcess(bool) {
  return {
    type: "FETCH_POSTS_ERROR",
    inProcess: bool
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: "FETCH_POSTS_SUCCESS",
    posts
  };
}

export function fetchPosts(url, config) {
  return dispatch => {
    console.log("Into fetch data action", config);
    dispatch(fetchPostsInProcess(true));

    ApiCallForFetchPosts(config)
      .then(response => {
        console.log("response in  for fetch data", response);
        dispatch(fetchPostsSuccess(response.data));
        dispatch(fetchPostsInProcess(false));
      })
      .catch(error => {
        dispatch(fetchPostsError(false, error));
        dispatch(fetchPostsInProcess(false));
        // console.log(error);
      });
  };
}

export function fetchPost(url, formData, config) {
  return dispatch => {
    console.log("Into fetch data action", config);
    dispatch(fetchPostsInProcess(true));

    ApiCallForFetchPost(config, formData)
      .then(response => {
        console.log("response in  for fetch data", response);
        dispatch(fetchPostsSuccess(response.data));
        dispatch(fetchPostsInProcess(false));
      })
      .catch(error => {
        dispatch(fetchPostsError(false, error));
        dispatch(fetchPostsInProcess(false));
        // console.log(error);
      });
  };
}
