import React from "react";
import { Todo } from "../model";
import SingleTodo from "./commonComponents/SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos &&
        todos?.map((ele) => {
          return (
            <SingleTodo
              key={ele?.id}
              todos={todos}
              todo={ele}
              setTodos={setTodos}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
