import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Todo } from "../types";

interface TodoCtx {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<TodoCtx>({} as TodoCtx);

const TodoProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("Tasks", []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;