import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostsPage from "./Posts/PostsPage";
import CommentPage from "./Comments/CommentPage";

const App = () => (
  <Router>
    <Route exact path="/" component={PostsPage} />
    <Route path="/post/:id" component={CommentPage} />
  </Router>
);

export default App;
