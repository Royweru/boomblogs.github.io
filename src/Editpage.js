import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ax from "./api/ax";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Editpage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { bid } = useParams();
  const post = posts.find((post) => post.bid == bid);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const navigate = useNavigate();

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMM dd yyyy pp");
    const editedPost = {
      bid,
      datetime: datetime,
      title: editTitle,
      body: editBody,
    };
    try {
      const response = await ax.put(`/blogs/${id}`, editedPost);
      setPosts(
        posts.map((post) => (post.bid== bid ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error:${Error.message}`);
    }
  };
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [setEditTitle, setEditBody, post]);

  return (
    <main className="editpage">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()} className="newpostform">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={editTitle}
              required
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />

            <label htmlFor="body">Edit Blog:</label>
            <textarea
              className="textarea"
              id="body"
              value={editBody}
              required
              onChange={(e) => {
                setEditBody(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={() => {
                handleEdit(post.id);
              }}
            >
              EDIT
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>There are is no post to be edited</h2>
          <Link to={"/"}>BACK TO HOME PAGE</Link>
        </>
      )}
    </main>
  );
};

export default Editpage;
