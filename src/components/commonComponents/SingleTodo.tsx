import React, { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

import { Todo } from "../../model";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const inputRefs = useRef<HTMLInputElement>(null);
  const [editFlag, setEditFlag] = useState(false);
  const [edit, setEdit] = useState(todo?.todo);

  useEffect(() => {
    inputRefs.current?.focus();
  }, [editFlag]);

  const handleDone = (id: number) => {
    setTodos((prev: Todo[]) => {
      return prev.map((ele) => {
        if (ele?.id === id) {
          return {
            ...ele,
            isDone: !ele.isDone,
          };
        }
        return ele;
      });
    });
  };

  const handleDelete = (id: number) => {
    setTodos((prev: Todo[]) => {
      return prev.filter((ele) => ele?.id !== id);
    });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos((prev: Todo[]) => {
      return prev.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            todo: edit,
          };
        }
        return ele;
      });
    });
    setEditFlag(false);
  };

  return (
    <form
      className="todos_single"
      style={
        todo.isDone
          ? { backgroundColor: "#31dd31" }
          : { backgroundColor: "#ddd831" }
      }
      onSubmit={(e) => handleEdit(e, todo?.id)}
    >
      {editFlag ? (
        <input
          ref={inputRefs}
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          className="todo_single-text"
        />
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}
      <div>
        <span className="icons" onClick={() => setEditFlag(true)}>
          <CiEdit />
        </span>
        <span className="icons" onClick={() => handleDelete(todo?.id)}>
          <MdDeleteOutline />
        </span>
        <span className="icons" onClick={() => handleDone(todo?.id)}>
          <IoCheckmarkDoneCircleOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
