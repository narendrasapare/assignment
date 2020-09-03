import React, { Component } from "react";
import Comment from "./Comment";
import axios from "axios";

class CommentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comments: [],
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) =>
        this.setState({
          post: response.data,
        })
      );

    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
      .then((response) =>
        this.setState({
          comments: response.data,
        })
      );
  }

  render() {
    let comment = this.state.comments.map((element, key) => (
      <Comment key={key} email={element.email} body={element.body} />
    ));

    return (
      <div>
        <div>
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
        </div>
        <div>
          <h2>COMMENTS</h2>
          {comment}
        </div>
      </div>
    );
  }
}

export default CommentPage;
