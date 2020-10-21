import React, { Component } from "react";
import axios from "axios";

class SingleArticle extends Component {
  state = {
    articleInfo: {},
  };
  componentDidMount() {
    axios
      .get(
        `https://alex-northcoders-news.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data }) => {
        this.setState({ articleInfo: data.article });
      });
  }
  render() {
    const { articleInfo } = this.state;
    return (
      <main>
        <h1 className="singleTitle">{articleInfo.title}</h1>
        <p className="singleTopic">
          Author: {articleInfo.author}
          <br />
          Topic: {articleInfo.topic}
          <br />
          Published: {articleInfo.created_at}
        </p>
        <p className="singleBody">{articleInfo.body}</p>
      </main>
    );
  }
}

export default SingleArticle;
