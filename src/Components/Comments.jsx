import axios from "axios";
import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";

class Comments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    getCommentsByArticleId(this.props.article_id).then(({ data }) => {
      console.log(data);
      this.setState({ comments: data.comments });
    });
  }
  render() {
    const { comments } = this.state;
    return (
      <section>
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Comments;
