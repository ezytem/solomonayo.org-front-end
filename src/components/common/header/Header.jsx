import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState({
    home: false,
    foundation: false,
    competition: false,
  });
  const [heroContent, setHeroContent] = useState({
    image: "/images/bg.webp",
    title: "Committed To Enhancing Lives",
    subtitle: " ",
  });

  const handleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleNavClick = (image, title, subtitle) => {
    setHeroContent({ image, title, subtitle });
    setClick(false);
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li
              onMouseEnter={() => handleDropdown("home")}
              onMouseLeave={() => handleDropdown("home")}
              onClick={() => handleDropdown("home")}
            >
              <Link to="/" onClick={() => handleNavClick("/images/bg.webp", "Committed To Enhancing Lives", " ")}>
                Home <span className="dropdown-arrow">&#9662;</span>
              </Link>
              {dropdown.home && (
                <ul className="dropdown">
                  <li><Link to="/about" onClick={() => handleNavClick("/images/contant.webp", " ", " ")}>About us</Link></li>
                  <li><Link to="/contact" onClick={() => handleNavClick("/images/contant.webp", " ", " ")}>Contact</Link></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdown("foundation")}
              onMouseLeave={() => handleDropdown("foundation")}
              onClick={() => handleDropdown("foundation")}
            >
              <Link to="/howwe" onClick={() => handleNavClick("/images/Home3.webp", "Seeing others smile, bring us fulfillment", " ")}>
                S.A Foundation <span className="dropdown-arrow">&#9662;</span>
              </Link>
              {dropdown.foundation && (
                <ul className="dropdown">
                  <li><Link to="/howwe" onClick={() => handleNavClick("/images/Home3.webp", " ", " ")}></Link></li>
                  <li><Link to="/sa-book-store" onClick={() => handleNavClick("/images/Home3.webp", " Explore our collection of books available for purchase ", " ")}>S.A Book Store</Link></li>
                  <li><Link to="/reader-club" onClick={() => handleNavClick("/images/Home3.webp", " ", " ")}>The Reader Club</Link></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdown("competition")}
              onMouseLeave={() => handleDropdown("competition")}
              onClick={() => handleDropdown("competition")}
            >
              <Link to="/competition" onClick={() => handleNavClick("/images/blog.webp", "Building readers into nation leaders", " ")}>
                S.A Annual Book Competition <span className="dropdown-arrow">&#9662;</span>
              </Link>
              {dropdown.competition && (
                <ul className="dropdown">
                  <li><Link to="/vision" onClick={() => handleNavClick("/images/blog.webp", " ", " ")}>The Vision</Link></li>
                  <li><Link to="/previous-editions" onClick={() => handleNavClick("/images/blog.webp", "Previous Editions", " ")}>Previous Editions</Link></li>
                  <li><Link to="/testimonials" onClick={() => handleNavClick("/images/blog.webp", "What our Winners are saying", " ")}>Testimonies</Link></li>
                  <li><Link to="/faq" onClick={() => handleNavClick("/images/blog.webp", "FAQs", " ")}>FAQs</Link></li>
                </ul>
              )}
            </li>
          </ul>
          <div className="start">
            <Link to="/blog" className="start-link" onClick={() => handleNavClick("/images/blog.webp", "Blog posts", "")}>
              Blogs
            </Link>
          </div>
          <div className="admin-link">
            <Link to="/login" onClick={() => handleNavClick("/images/blog.webp", "", "")}>
              
            </Link>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
      <div className="hero">
        <img src={heroContent.image} alt="Background" className="hero-image" loading="lazy" />
        <div className="hero-content">
          <h1>{heroContent.title}</h1>
          <p>{heroContent.subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
