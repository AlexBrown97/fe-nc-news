import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import styled from "styled-components";

const Topics = styled.button`
  font-family: sans-serif;
  font-weight: lighter;
  background-color: #ba1f31;
  border-radius: 25px;
  font-size: 1.5em;
  padding: 0.4em;
  border: 2px solid black;
  text-decoration: none;
  transition-duration: 0.4s;
  &:hover {
    background-color: palevioletred;
    color: white;
    border: 2px solid palevioletred;
  }
`;

export default class TopicLinks extends React.Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    axios
      .get("https://alex-northcoders-news.herokuapp.com/api/topics")
      .then(({ data: { topics } }) => {
        this.setState({ topics });
      });
  }
  render() {
    return (
      <nav>
        <Topics className="buttons">
          <Link to="/articles">all articles</Link>
        </Topics>
        {this.state.topics.map((topic) => {
          return (
            <Topics key={topic.slug}>
              <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
            </Topics>
          );
        })}
      </nav>
    );
  }
}
