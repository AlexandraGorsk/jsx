import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Input from "../Input";

const FormContainer = styled("form")`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  > div {
    margin-top: 8px;
  }
`;

class Form extends React.Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onCreateTodo } = this.props;
    const { name } = this.state;
    onCreateTodo(name);

    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;

    return (
      <FormContainer>
        <Input
          name="name"
          label="Новое задание"
          id="create"
          placeholder="Название"
          value={name}
          onChange={this.handleChange}
        />
        <div>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            size="large"
            type="submit"
          >
            Создать
          </Button>
        </div>
      </FormContainer>
    );
  }
}

export default Form;
