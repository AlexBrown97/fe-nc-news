import axios from "axios";
import React, { Component } from "react";
import ErrorHandler from "./ErrorHandler";
import { Link } from "@reach/router";
import Loader from "./Loader";
import VoteUpdater from "./VoteUpdater";
import styled from "styled-components";

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
  &:hover {
    background-color: palevioletred;
    color: white;
    border: 2px solid palevioletred;
  }
`;

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null,
    order: "desc",
  };

  fetchOrder = () => {
    axios
      .get("https://alex-northcoders-news.herokuapp.com/api/articles", {
        params: {
          topic: this.props.topic,
          order: this.state.order,
        },
      })
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      });
  };

  orderingBy = () => {
    this.setState({ order: "asc" });
  };

  // get the order because state has changed
  // do another get request
  // conditional logic to avoid infinite loop
  // extract out method for re-use
  componentDidUpdate(prevState) {
    const order = this.state.order;
    const topic = this.state.topic;
    if (prevState.order !== order) {
      this.fetchOrder();
    }
  }

  // componentDidMount() {
    axios
      .get("https://alex-northcoders-news.herokuapp.com/api/articles", {
        params: {
          topic: this.props.topic,
          order: this.state.order,
        },
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
    console.log(this.state.order);
    const { articles, isLoading, error } = this.state;
    if (error) return <ErrorHandler {...error} />;
    if (isLoading) return <Loader />;
    return (
      <main>
        <Button className="buttons" onClick={this.orderingBy}>
          Newest to Oldest
        </Button>
        <Button className="buttons">Oldest to Newest</Button>
        {articles.map((article) => {
          return (
            <section className="articleCards">
              <Link to={`/article/${article.article_id}`}>
                <h1 className="articleTitle">{article.title}</h1>
              </Link>
              <h3 className="articleInfo">
                Author: {article.author}
                <br />
                Topic: {article.topic}
                <br />
                Published: {article.created_at}
              </h3>
              <VoteUpdater
                votes={article.votes}
                article_id={article.article_id}
              />
            </section>
          );
        })}
      </main>
    );
  }
}

export default ArticleList;
