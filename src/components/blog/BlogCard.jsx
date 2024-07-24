import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const BlogCard = ({ blogs }) => {
  return (
    <>
      {blogs.map((val) => (
        <Link to={`/blog/${val._id}`} className="blog-link" key={val._id}>
          <div className="items shadow">
            <div className="img">
              <img src={val.cover} alt={val.title} />
            </div>
            <div className="text">
              <div className="admin flexSB">
                <span>
                  <i className="fa fa-user"></i>
                  <label>{val.type}</label>
                </span>
                <span>
                  <i className="fa fa-calendar-alt"></i>
                  <label>{val.date}</label>
                </span>
                <span>
                  <i className="fa fa-comments"></i>
                  <label>{val.com}</label>
                </span>
              </div>
              <h1>{val.title}</h1>
              <p>{val.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BlogCard;
