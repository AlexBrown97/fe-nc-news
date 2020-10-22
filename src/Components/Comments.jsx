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
        <p className="comments-list">
          {comments.map((comment) => (
            <p key={comment.comment_id}>
              <p className="singleCommentsInfo">
                User: {comment.author} <br />
                Posted: {comment.created_at} <br />
                Votes: {comment.votes}
              </p>
              <p className="singleComments">{comment.body}</p>
            </p>
          ))}
        </p>
      </section>
    );
  }
}

export default Comments;
