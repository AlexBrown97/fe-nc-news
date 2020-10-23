import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { username } from "../constants";

const { render } = require("react-dom");

const Header = styled.h2`
  font-family: "Playfair Display";
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  text-align: left;
`;

class CommentAdder extends Component {
  state = {
    username: username,
    body: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { body, username } = this.state;
    this.props.addComment(body, username);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <Header>Post a Comment</Header>
          <label htmlFor="body">Comment:</label>
          <textarea name="body" id="body" />
          <button type="submit">Add</button>
        </form>
      </main>
    );
  }
}

export default CommentAdder;
