import axios from "axios";
import React, { Component } from "react";
import ErrorHandler from "./ErrorHandler";
import { Link } from "@reach/router";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get("https://alex-northcoders-news.herokuapp.com/api/articles", {
        params: { topic: this.props.topic },
      })
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
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
    const { articles, isLoading, error } = this.state;
    console.log(this.props, "<- article list");
    if (error) return <ErrorHandler {...error} />;
    if (isLoading) return <div>Loading Articles...</div>;
    return (
      <main>
        {articles.map((article) => {
          return (
            <section className="articleCards">
              <Link to={`/article/${article.article_id}`}>
                <h1 className="articleTitle">{article.title}</h1>
              </Link>
              <h3 className="articleInfo">
                {article.author}
                <br />
                {article.topic}
                <br />
                {article.created_at}
              </h3>
            </section>
          );
        })}
      </main>
    );
  }
}

export default ArticleList;
