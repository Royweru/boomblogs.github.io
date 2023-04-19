import React from "react";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { bid } = useParams();
  const post = posts.find((post) => post.bid.toString() === bid);

  return (
    <main className="PostPage">
      <article className="postpagearticle">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postpaged">{post.datetime}</p>
            <p className="postpageb">{post.body}</p>
          </>
        )}
        {!post && (
          <>
            <h2>OOOPS!</h2>
            <p>Looks like we did not find your post</p>
            <Link to={<Home />}>RETURN TO THE HOME PAGE</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
