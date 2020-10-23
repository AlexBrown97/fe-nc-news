import axios from "axios";
import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";
import ErrorHandler from "./ErrorHandler";
import Loader from "./Loader";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    getCommentsByArticleId(this.props.article_id)
      .then(({ data }) => {
        this.setState({ comments: data.comments, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: {
            status: response.status,
            message: response.data.msg,
          },
        });
      });
  }
  render() {
    const { comments, isLoading, error } = this.state;
    if (error) return <ErrorHandler {...error} />;
    if (isLoading) return <Loader />;
    return (
      <section>
        <p className="comments-list">
          {comments.map((comment) => (
            <p key={comment.comment_id}>
              <p className="singleCommentsInfo">
                User: {comment.author} <br />
                Posted: {comment.created_at.slice(0, 10)} <br />
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
