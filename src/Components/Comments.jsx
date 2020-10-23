import axios from "axios";
import React, { Component } from "react";
import { getCommentsByArticleId, postCommentByArticleId } from "../api";
import ErrorHandler from "./ErrorHandler";
import Loader from "./Loader";
import styled from "styled-components";
import CommentAdder from "./CommentAdder";

const Button = styled.button`
  font-family: sans-serif;
  font-weight: lighter;
  color: white;
  background-color: #ba1f31;
  border-radius: 25px;
  font-size: 0.8em;
  padding: 0.4em;
  border: 1px solid black;
  margin: 1em;
  text-decoration: none;
  transition-duration: 0.4s;
  float: right;
  &:hover {
    background-color: palevioletred;
    color: white;
    border: 2px solid palevioletred;
  }
`;

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
  deleteComment(comment_id) {
    return axios.delete(
      `https://alex-northcoders-news.herokuapp.com/api/comments/${comment_id}`
    );
  }

  addComment = (body, username) => {
    console.log(this.props);
    postCommentByArticleId(this.props.article_id, {
      body,
      username,
    }).then((res) => {
      this.setState((currentState) => ({
        comments: [res.data.comment, ...currentState.comments],
      }));
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      getCommentsByArticleId(this.props.article_id).then(({ data }) => {
        this.setState({ comments: data.comments, isLoading: false });
      });
    }
  }

  render() {
    const { comments, isLoading, error } = this.state;
    if (error) return <ErrorHandler {...error} />;
    if (isLoading) return <Loader />;
    return (
      <section>
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.comment_id}>
              <Button
                disabled={comment.author !== "happyamy2016"}
                onClick={() => this.deleteComment(comment.comment_id)}
              >
                Delete Comment
              </Button>
              <p className="singleCommentsInfo">
                {comment.author} <br />
                {comment.created_at.slice(0, 10)} <br />
                Votes: {comment.votes}
              </p>
              <p className="singleComments">{comment.body}</p>
            </div>
          ))}
        </div>
        <CommentAdder
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
      </section>
    );
  }
}

export default Comments;
