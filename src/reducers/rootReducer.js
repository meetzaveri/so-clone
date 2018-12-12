import { combineReducers } from "redux";
import { fetchPosts } from "./posts";
import { submitPost } from "./submitPost";
import { updatePost } from "./updatePost";

export default combineReducers({
  fetchPosts,
  submitPost,
  updatePost
});
