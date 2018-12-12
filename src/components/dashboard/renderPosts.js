import React from "react";
import { withRouter, Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const RenderPosts = props => {
  const renderposts =
    props.posts === null
      ? []
      : props.posts.map(post => (
          <>
            <div className="post-item">
              <div className="dib post-vote-cell">
                <div className="post-vote-count">
                  {post.upvotes.length - post.downvotes.length}
                </div>
                <div>Votes</div>
              </div>
              <div className="dib post-body-cell">
                <Link to={routes.read + post.id}>
                  <h3>{post.title}</h3>
                </Link>
                <p>By {post.username}</p>
              </div>
            </div>
          </>
        ));

  return renderposts;
};

export default withRouter(RenderPosts);
