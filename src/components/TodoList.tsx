import { List, Typography } from "@mui/material";
import { useContext } from "react";
import { TodoContext } from "../context";
import type { Todo } from "../types";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const toggleHandler = (todo: Todo): void => {
    todo.completed = !todo.completed;
    setTodos(() => todos.filter((t: Todo) => [t.id !== todo.id, todo]));
  };

  const deleteHandler = (id: string): void => {
    setTodos(() => todos.filter((todo: Todo) => todo.id !== id));
  };

  return (
    <List sx={{ width: "100%" }}>
      {todos.length ? (
        todos.map((todo: Todo) => {
          return <TodoListItem key={todo.id} data={todo} handler={{ toggleHandler, deleteHandler }} />;
        })
      ) : (
        <Typography>You don't have Todo yet !</Typography>
      )}
    </List>
  );
};

export default TodoList;
