import React from "react";
import { Todo } from "../models/model";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheckSquare,
} from "react-icons/ai";

// import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo.todo}</span>
      <div>
        <span className='icon'>
          <AiOutlineEdit />
        </span>
        <span className='icon'>
          <AiOutlineDelete />
        </span>
        <span className='icon'>
          <AiOutlineCheckSquare />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
