import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => (
  <Link to={"/post/" + props.id}>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </Link>
);

export default Post;
