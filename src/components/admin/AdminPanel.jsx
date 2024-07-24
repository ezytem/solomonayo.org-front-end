import React, { useState, useEffect } from "react";
import { fetchBlogs, createBlog, deleteBlog } from "../../api/blogApi";
import './adminPanel.css';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", cover: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };

    getBlogs();
  }, []);

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const data = await createBlog(newBlog);
      setBlogs([...blogs, data]);
      setNewBlog({ title: "", content: "", cover: "" });
      setMessage("Blog created successfully!");
    } catch (error) {
      setMessage("Error creating blog");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      setMessage("Blog deleted successfully!");
    } catch (error) {
      setMessage("Error deleting blog");
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBlog.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={newBlog.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover Image URL</label>
          <input
            type="text"
            id="cover"
            name="cover"
            value={newBlog.cover}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button">Create Blog</button>
      </form>
      <div className="existing-posts">
        <h3>Existing Posts</h3>
        {blogs.map((blog) => (
          <div className="post-item" key={blog._id}>
            <h4>{blog.title}</h4>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
