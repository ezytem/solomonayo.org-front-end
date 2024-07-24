import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";
import axios from "axios";
import "./blog.css";

const Blog = () => {
  let { path } = useRouteMatch();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blog posts", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container grid2">
          <Switch>
            <Route exact path={path}>
              <BlogCard blogs={blogs} />
            </Route>
            <Route path={`${path}/:id`} component={BlogPost} />
          </Switch>
        </div>
      </section>
    </>
  );
};

export default Blog;
