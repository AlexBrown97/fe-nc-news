import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { render } from "@testing-library/react";

export default class TopicLinks extends React.Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    axios
      .get("https://alex-northcoders-news.herokuapp.com/api/articles")
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  }
  render() {
    return <Link to="/articles">All Topics</Link>;
  }
}
