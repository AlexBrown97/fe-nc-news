import React from "react";
import styled from "styled-components";
import TopicLinks from "../Components/TopicLinks";

const Subtitle = styled.h2`
  font-weight: bold;
`;

const Topics = styled.h2`
  background-color: #ba1f31;
  padding: 18px;
  color: white;
  width: 200px;
  height: 40px;
  font-size: 35px;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
`;

const Homepage = () => {
  return (
    <div className="homepage">
      <Subtitle>
        Welcome to Northcoders News - a social news aggregation, web content
        rating, and discussion website.
      </Subtitle>
      <Topics>Topics</Topics>
      <TopicLinks />
    </div>
  );
};
export default Homepage;
