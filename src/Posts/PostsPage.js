import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";

class PostsPage extends Component {
  constructor() {
    super();

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
      this.setState({
        posts: response.data,
      })
    );
  }

  render() {
    let posts = this.state.posts.map((element, key) => (
      <Post
        key={key}
        id={element.id}
        title={element.title}
        body={element.body}
      />
    ));
    return (
      <div>
        <div>{posts}</div>
      </div>
    );
  }
}

export default PostsPage;
