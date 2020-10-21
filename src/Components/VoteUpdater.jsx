import axios from "axios";
import React from "react";
import { increaseVotesById } from "../api";

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
        <button onClick={() => this.handleVote(1)} value={1}>
          Vote UP
        </button>
        <p>Votes: {votes + usersVoteCount}</p>
        <button onClick={() => this.handleVote(-1)} value={-1}>
          Vote DOWN
        </button>
      </div>
    );
  }
}

export default VoteUpdater;
