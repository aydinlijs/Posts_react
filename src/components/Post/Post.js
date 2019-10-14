import React from "react";

const Post = props => {
  return (
    <div className="b-post">
      <p className="b-post-title">
        {props.post.title.charAt(0).toUpperCase() +
          props.post.title.substring(1)}
      </p>
      <p className="b-post-body">{props.post.body.slice(0, 150)}</p>
    </div>
  );
};

export default Post;
