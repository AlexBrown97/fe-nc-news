import axios from "axios";

const instance = axios.create({
  baseURL: "https://alex-northcoders-news.herokuapp.com/api",
});

export const increaseVotesById = (article_id, voteValue) => {
  return instance.patch(`/articles/${article_id}`, {
    vote: voteValue,
  });
};
