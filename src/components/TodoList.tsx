import SingleTodo from "./SingleTodo";
import { Todo } from "../models/model";
import "./styles.css";

interface Props {
  todos: Todo[];

  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className='todos'>
      <h1>Open Tasks</h1>

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
