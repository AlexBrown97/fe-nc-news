import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import { Router } from "@reach/router";
import ArticleList from "./Components/ArticleList";
import ErrorHandler from "./Components/ErrorHandler";
import SingleArticle from "./Components/SingleArticle";
import Comment from "./Components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <ArticleList path="/articles" />
        <ArticleList path="/articles/:topic" />
        <SingleArticle path="/article/:article_id" />
        <Comment path="/article/:article_id/comments" />
        <ErrorHandler default status={404} message="This page does not exist" />
      </Router>
    </div>
  );
}

export default App;
