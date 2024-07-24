import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/common/header/Header";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import SABookStore from "./components/bookstore/SABookStore";
import VisionObjectives from "./components/vision/VisionObjectives";
import Howwe from "./components/howwe/Howwe";
import ReadersClub from "./components/readersclub/ReadersClub";
import Competition from "./components/competition/Competition";
import NextEdition from "./components/competition/NextEdition";
import PreviousEditions from "./components/competition/PreviousEditions";
import Testimonials from "./components/testimonial/Testimonial";
import FAQ from "./components/faq/Faq";
import BlogPost from "./components/blog/BlogPost";
import AdminPanel from "./components/admin/AdminPanel";
import AdminDashboard from "./components/admin/AdminDashboard";
import Login from "./components/admin/Login";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sa-book-store" component={SABookStore} />
        <Route exact path="/vision" component={VisionObjectives} />
        <Route exact path="/howwe" component={Howwe} />
        <Route exact path="/reader-club" component={ReadersClub} />
        <Route exact path="/competition" component={Competition} />
        <Route exact path="/next-edition" component={NextEdition} />
        <Route exact path="/previous-editions" component={PreviousEditions} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/admin-dashboard" component={AdminDashboard} />
        <PrivateRoute exact path="/admin-panel" component={AdminPanel} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
