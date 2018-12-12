export function updatePost(state = {}, action) {
  switch (action.type) {
    case "UPDATE_POST_ERROR":
      return {
        ...state,
        error: action.error,
        hasError: true
      };

    case "UPDATE_POST_IN_PROCESS":
      return {
        ...state,
        inProcess: action.inProcess,
        updated: false
      };

    case "UPDATE_POST_SUCCESS":
      console.log("action.posts update", action.post);
      return {
        ...state,
        updated: true,
        response: action.post
      };

    default:
      return state;
  }
}
