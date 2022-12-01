import SingleTodo from "./SingleTodo";
import { Todo } from "../models/model";
import "./styles.css";

interface props {
  todos: Todo[];

  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }: props) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos__heading'>Open Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className='todos remove'>
        <span className='todos__heading'>Close Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
