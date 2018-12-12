import axios from "axios";

export function submitPostError(error) {
  return {
    type: "SUBMIT_POST_ERROR",
    error
  };
}

export function submitPostInProcess(bool) {
  return {
    type: "SUBMIT_POST_IN_PROCESS",
    inProcess: bool
  };
}

export function submitPostSuccess(post) {
  return {
    type: "SUBMIT_POST_SUCCESS",
    post
  };
}

export function submitPost(url, formData, config) {
  return dispatch => {
    console.log("Into submit data action", config);
    dispatch(submitPostInProcess(true));

    axios
      .post(url, formData, config)
      .then(response => {
        console.log("response in axios for submit data", response);
        dispatch(submitPostSuccess(response.data));
        dispatch(submitPostInProcess(false));
      })
      .catch(error => {
        dispatch(submitPostError(error));
        dispatch(submitPostInProcess(false));
        // console.log(error);
      });
  };
}
