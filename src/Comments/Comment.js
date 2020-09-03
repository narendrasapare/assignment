import React from "react";

const Comment = (props) => (
  <div>
    <div>
      <h3>{props.email}</h3>
      <p>{props.body}</p>
    </div>
  </div>
);

export default Comment;
