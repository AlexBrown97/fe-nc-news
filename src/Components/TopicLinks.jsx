import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import styled from "styled-components";

// const Topics = styled.button`
//   background-color: #ba1f31;
//   padding: 18px;
//   color: white;
//   width: 300px;
//   height: 40px;
//   font-size: 35px;
//   border-radius: 25px;
//   margin-left: auto;
//   margin-right: auto;
// `;

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
    return (
      <button>
        <Link to="/articles">All button</Link>
      </button>
    );
  }
}
