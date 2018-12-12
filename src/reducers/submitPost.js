export function submitPost(state = {}, action) {
  switch (action.type) {
    case "SUBMIT_POST_ERROR":
      return {
        ...state,
        error: action.error,
        hasError: true
      };

    case "SUBMIT_POST_IN_PROCESS":
      return {
        ...state,
        inProcess: action.inProcess,
        submitted: false
      };

    case "SUBMIT_POST_SUCCESS":
      console.log("action.posts submit", action.post);
      return {
        ...state,
        submitted: true,
        response: action.post
      };

    default:
      return state;
  }
}
