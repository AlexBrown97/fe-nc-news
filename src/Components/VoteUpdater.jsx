import React from "react";
import { increaseVotesById } from "../api";
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
  text-decoration: none;
  transition-duration: 0.4s;
  &:hover {
    background-color: palevioletred;
    color: white;
    border: 2px solid palevioletred;
  }
`;

const Vote = styled.p`
  font-family: sans-serif;
  font-weight: lighter;
`;

class VoteUpdater extends React.Component {
  state = {
    usersVoteCount: 0,
  };
  handleVote = (voteValue) => {
    this.setState((currentState) => {
      return { usersVoteCount: currentState.usersVoteCount + voteValue };
    });

    const { article_id } = this.props;
    increaseVotesById(article_id, voteValue).catch(() => {
      this.setState((currentState) => {
        return { usersVoteCount: currentState.usersVoteCount - voteValue };
      });
    });
  };
  render() {
    const { votes } = this.props;
    const { usersVoteCount } = this.state;
    return (
      <div>
        <Button onClick={() => this.handleVote(1)} value={1}>
          Vote UP
        </Button>
        <Vote>Votes: {votes + usersVoteCount}</Vote>
        <Button onClick={() => this.handleVote(-1)} value={-1}>
          Vote DOWN
        </Button>
      </div>
    );
  }
}

export default VoteUpdater;
