import React from "react";

import Button from "../Button";

/*
  handleDone => this.props
  handleDelete => this.props
*/

const ListItem = ({ name, done }) => {
  return (
    <li>
      <p>{name}</p>
      <div>
        <Button variant="outlined" size="small" type="button">
          Выполнено
        </Button>
        <Button variant="outlined" size="small" type="button">
          Удалить
        </Button>
      </div>
    </li>
  );
};

export default ListItem;
