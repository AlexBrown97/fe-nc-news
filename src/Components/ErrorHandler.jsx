import React from "react";
import styled from "styled-components";

const Warning = styled.h2`
  color: red;
  font-weight: bold;
  background: white;
  border: 2px dashed red;
  padding: 1rem;
  margin: 1rem;
  font-family: sans-serif;
`;

const ErrorHandler = (props) => {
  if (props.status === 404) {
    return (
      <Warning>
        ❗Error - Code:{props.status}, {props.message}❗
      </Warning>
    );
  } else if (props.status === 400) {
    return (
      <Warning>
        ❗Error - Code:{props.status}, {props.message}❗
      </Warning>
    );
  }
};

export default ErrorHandler;
