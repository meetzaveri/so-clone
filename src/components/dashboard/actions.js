export const fetch_posts_actions = {
  FetchPostsActionRequested: "dashboard/FETCH_POSTS_REQUESTED",
  FetchPostsActionSucceded: "dashboard/FETCH_POSTS_SUCCEEDED",
  FetchPostsActionFailed: "dashboard/FETCH_POSTS_FAILED"
};

export const fetch_posts_request = params => ({
  type: fetchPostsActions.FetchPostsActionRequested,
  payload: params
});
export const fetch_posts_success = data => ({
  type: fetchPostsActions.FetchPostsActionSucceded,
  payload: data
});
export const fetch_posts_failed = err => ({
  type: fetchPostsActions.FetchPostsActionFailed,
  payload: err
});
