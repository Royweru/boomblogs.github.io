import React from "react";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`post/${post.bid}`}>
        <h1 className="tittle">{post.title}</h1>
        <h2 className="date">{post.datetime}</h2>
      </Link>
      <p className="blogcontent">{post.length>=80?(
        post.body):(
          `${(post.body).slice(0,80)}.............`
        )}</p>
    </article>
  );
};

export default Post;
