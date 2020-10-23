import axios from "axios";

const instance = axios.create({
  baseURL: "https://alex-northcoders-news.herokuapp.com/api",
});

// export const getAllArticles = (articles) => {
//   return instance.get(`/articles`);
// };
export const getArticleById = (article_id) => {
  return instance.get(`/articles/${article_id}`);
};

export const increaseVotesById = (article_id, voteValue) => {
  return instance.patch(`/articles/${article_id}`, {
    inc_votes: voteValue,
  });
};
export const getCommentsByArticleId = (article_id) => {
  return instance.get(`/articles/${article_id}/comments`);
};

export const postCommentByArticleId = (article_id, comments) => {
  return instance.post(`/articles/${article_id}/comments`);
};
