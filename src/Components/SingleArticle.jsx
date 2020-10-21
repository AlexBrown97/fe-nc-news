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
        <h2>{articleInfo.article}</h2>
        <p>{articleInfo.topic}</p>
        <p>{articleInfo.author}</p>
      </main>
    );
  }
}

export default SingleArticle;
