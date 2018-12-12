import React from "react";
import RenderPosts from "./renderPosts";

const Dashboard = props => {
  return (
    <>
      <div>
        <h2>Questions</h2>
        <div className="post-container">
          <RenderPosts posts={props.internalState.fetchedPosts} />{" "}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
