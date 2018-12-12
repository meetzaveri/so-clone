export function fetchPosts(state = {}, action) {
  switch (action.type) {
    case "FETCH_POSTS_ERROR":
      return {
        ...state,
        error: action.error,
        hasError: true
      };

    case "FETCH_POSTS_ERROR":
      return {
        ...state,
        inProcess: action.inProcess,
        dataFetched: false
      };

    case "FETCH_POSTS_SUCCESS":
      console.log("action.posts fetch", action.posts);
      return {
        ...state,
        dataFetched: true,
        response: action.posts
      };

    default:
      return state;
  }
}
