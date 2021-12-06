import React from "react";

import styled from "styled-components";

const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 4px;
  }

  > input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid gray;
  }
`;

const Input = ({ label, ...inputProps }) => {
  return (
    <InputWrapper>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
    </InputWrapper>
  );
};

export default Input;
