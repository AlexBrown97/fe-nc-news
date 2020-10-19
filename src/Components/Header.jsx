import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Northcoders = styled.h1`
  background-color: #ba1f31;
  color: white;
`;

const Header = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Northcoders>Northcoder's News</Northcoders>
    </Link>
  );
};

export default Header;
