import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";
import VoteUpdater from "./VoteUpdater";

class SingleArticle extends Component {
  state = {
    articleInfo: {},
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    axios
      .get(
        `https://alex-northcoders-news.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data }) => {
        this.setState({ articleInfo: data.article, isLoading: false });
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
    const { articleInfo, isLoading, error } = this.state;
    if (error) return <ErrorHandler {...error} />;
    if (isLoading) return <Loader />;
    return (
      <main>
        <VoteUpdater
          votes={articleInfo.votes}
          article_id={articleInfo.article_id}
        />
        <h1 className="singleTitle">{articleInfo.title}</h1>
        <p className="authorTopicDate">
          Author: {articleInfo.author}
          <br />
          Topic: {articleInfo.topic}
          <br />
          Published: {articleInfo.created_at}
        </p>
        <p className="singleBody">{articleInfo.body}</p>
        <p className="singleVotes">Votes: {articleInfo.votes}</p>
      </main>
    );
  }
}

export default SingleArticle;
