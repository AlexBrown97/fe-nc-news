import React from "react";
import styled from "styled-components";
import TopicLinks from "../Components/TopicLinks";

const Homepage = () => {
  return (
    <div className="homepage">
      <h2 className="subtitle">
        Welcome to Northcoders News - a social news aggregation, web content
        rating, and discussion website.
      </h2>
      <h1 style={{ textDecoration: "none", fontFamily: "playfair display" }}>
        What would you like to read?
      </h1>
      <TopicLinks />
    </div>
  );
};
export default Homepage;
