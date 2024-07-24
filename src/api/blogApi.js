// src/api/blogApi.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs";

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs", error);
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(API_URL, blogData, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating blog", error);
    throw error;
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting blog", error);
    throw error;
  }
};
