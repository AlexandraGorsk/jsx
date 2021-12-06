import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

const TodoList = styled("div")`
  margin: 32px auto;
  padding: 8px;
  max-width: 600px;
  box-sizing: border-box;
  border: 2px solid gray;
`;

// const skeletonTodo = {
//   id: uuidv4(),
//   name: "some todo",
//   done: false,
// };

/*
  1. handleChangeFilterValue => <Filter onChangeFilterValue={handleChangeFilterValue}/>
  2. handleClick => <Filter onChangeFilterValue={handleChangeFilterValue} onClick={handleClick}/> // фильтрация по кнопкам
  3. handleDone => <List list={todoList} onDone={handleDone} />
  4. handleDelete => <List list={todoList} onDone={handleDone} onDelete={handleDelete} />
*/

class App extends React.Component {
  state = {
    filterStatus: "all", // deleted, done
    filterValue: "",
    todoList: [],
    deletedTodo: [],
  };

  handleCreateTodo = (name) => {
    this.setState({
      todoList: this.state.todoList.concat({ name, done: false, id: uuidv4() }),
    });
  };

// handleDone = (id)=>{
// this.setState({
//   todoList:this.state.todoList.map((item)=>)
// })
// }

  render() {
    const { todoList } = this.state;

    return (
      <TodoList>
        <Header />
        <section>
          <Filter />
        </section>
        <List list={todoList} />
        <section>
          <Form onCreateTodo={this.handleCreateTodo} />
        </section>
      </TodoList>
    );
  }
}

export default App;
