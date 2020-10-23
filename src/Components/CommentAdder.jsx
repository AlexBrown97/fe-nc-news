import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { username } from "../constants";

const { render } = require("react-dom");

const Button = styled.button`
  font-family: sans-serif;
  font-weight: lighter;
  color: white;
  background-color: #ba1f31;
  border-radius: 25px;
  font-size: 1em;
  padding: 0.3em;
  border: 1px solid black;
  margin-left: 0.5em;
  text-decoration: none;
  transition-duration: 0.4s;
  &:hover {
    background-color: palevioletred;
    color: white;
    border: 2px solid palevioletred;
  }
`;

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
    console.log(e.target);
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <Header>Post a Comment</Header>
          <label className="commentLabel" htmlFor="body">
            Comment:
          </label>
          <textarea onChange={this.handleChange} name="body" id="body" />
          <Button type="submit">Add</Button>
        </form>
      </main>
    );
  }
}

export default CommentAdder;
