import axios from "axios";
import React, { Component } from "react";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get("https://alex-northcoders-news.herokuapp.com/api/articles")
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      });
  }
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <div>Loading Articles...</div>;
    return (
      <main>
        {articles.map((article) => {
          return <section>{article.title}</section>;
        })}
      </main>
    );
  }
}

export default ArticleList;
