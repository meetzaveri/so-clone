import { fetch_posts_actions } from "./actions";

export const loginreducer = (
  state = {
    data: [],
    onLoading: false,
    onLoadingFormSubmit: false,
    role: "",
    error: null
  },
  action
) => {
  switch (action.type) {
    case fetch_posts_actions.FetchPostsActionRequested:
      state = {
        ...state,
        onLoading: true
      };
      return state;

    case fetch_posts_actions.FetchPostsActionSucceded:
      // console.log("Action in login request success", action);
      let loginOnSuccess = action.payload;

      if (loginOnSuccess) {
        localStorage.setItem("token", loginOnSuccess.data.token);
        state = {
          ...state,
          data: loginOnSuccess,
          onLoading: false,
          loginsuccess: true,
          role: loginOnSuccess.data.role,
          userid: action.payload.data.id
        };

        return state;
      } else {
        state = {
          ...state,
          data: [],
          onLoading: false
        };
        return state;
      }

    case fetch_posts_actions.FetchPostsActionFailed:
      state = {
        ...state,
        data: [],
        onLoading: false,
        error: action.message ? action.message : "Error in login action"
      };
      console.log("Action in login request fail", action);
      return state;

    default:
      state = {
        ...state
      };
      return state;
  }
};
