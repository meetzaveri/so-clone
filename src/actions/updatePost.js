import axios from "axios";

export function updatePostError(error) {
  return {
    type: "UPDATE_POST_ERROR",
    error
  };
}

export function updatePostInProcess(bool) {
  return {
    type: "UPDATE_POST_IN_PROCESS",
    inProcess: bool
  };
}

export function updatePostSuccess(post) {
  return {
    type: "UPDATE_POST_SUCCESS",
    post
  };
}

export function updatePost(url, formData, config) {
  return dispatch => {
    console.log("Into update data action", config);
    dispatch(updatePostInProcess(true));

    axios
      .put(url, formData, config)
      .then(response => {
        console.log("response in axios for update data", response);
        dispatch(updatePostSuccess(response.data));
        dispatch(updatePostInProcess(false));
      })
      .catch(error => {
        dispatch(updatePostError(error));
        dispatch(updatePostInProcess(false));
        // console.log(error);
      });
  };
}
