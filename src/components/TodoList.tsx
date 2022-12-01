import SingleTodo from "./SingleTodo";
import { Todo } from "../models/model";
import "./styles.css";

interface props {
  todos: Todo[];

  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }: props) => {
  return (
    <div className='todos'>
      <h1 className='h1-test'>Open Tasks</h1>

      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
