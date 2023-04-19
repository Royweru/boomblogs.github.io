import React from "react";
import { useState } from "react";
import ax from "./api/ax";
import format from "date-fns/format";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
import { useNavigate } from "react-router-dom";
const NewPost = () => {
const{posts,setPosts} =useContext(DataContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bid = posts.length ? posts[posts.length - 1].bid + 1 : 1;
    const datetime = format(new Date(), "MMM dd yyyy pp");
    try {
      const newPost = { bid, title: title, datetime: datetime, body: body };
      const response = await ax.post("/blogs", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setTitle("");
      setBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error:${error.message}`);
    }
  };
  return (
    <main className="NewPost">
      <h2> NEW POST</h2>
      <form onSubmit={handleSubmit} className="newpostform">
        <label htmlFor="title">Title:</label>

        <input
          type="text"
          id="title"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="body">Write Blog:</label>
        <textarea
          className="textarea"
          id="body"
          value={body}
          required
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button type="submit">POST</button>
      </form>
    </main>
  );
};

export default NewPost;
