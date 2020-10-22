import React, { Component } from "react";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";
import VoteUpdater from "./VoteUpdater";
import { getArticleById } from "../api";

class SingleArticle extends Component {
  state = {
    articleInfo: {},
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    getArticleById(this.props.article_id)
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
      <main className="singleArticle">
        <h1 className="singleTitle">{articleInfo.title}</h1>
        <p className="authorTopicDate">
          Author: {articleInfo.author}
          <br />
          Topic: {articleInfo.topic}
          <br />
          Published: {articleInfo.created_at}
        </p>
        <p className="singleBody">{articleInfo.body}</p>
        <VoteUpdater
          votes={articleInfo.votes}
          article_id={articleInfo.article_id}
        />
      </main>
    );
  }
}

export default SingleArticle;
