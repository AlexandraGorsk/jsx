import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Input from "../Input";

const FilterForm = styled("form")`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ButtonsGroup = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4px -4px 0;

  > button {
    margin: 4px;
    flex: 1;
  }
`;

/*
  handleAllClick => this.props.onClick('all')
  handleDoneClick => this.props.onClick('done')
  handleDeletedClick => this.props.onClick('deleted')
*/

const Filter = () => {
  return (
    <FilterForm>
      <Input
        label="Поиск по названию"
        id="search"
        placeholder="Начни вводить"
      />
      <ButtonsGroup>
        <Button variant="contained" type="button">
          Все
        </Button>
        <Button variant="contained" type="button">
          Выполненные
        </Button>
        <Button variant="contained" type="button">
          Удалённые
        </Button>
      </ButtonsGroup>
    </FilterForm>
  );
};

export default Filter;
