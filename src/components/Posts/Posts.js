import React from "react";
import Post from "./../Post/Post";

const Posts = props => {
  const renderPosts = !props.loading ? (
    props.list.map(p => {
      return (
        <div className="b-posts" key={p.id}>
          <Post post={p} />
        </div>
      );
    })
  ) : (
    <div className="b-center">Loading...</div>
  );
  return <div>{renderPosts}</div>;
};

export default Posts;
