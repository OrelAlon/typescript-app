import SingleTodo from "./SingleTodo";
import { Todo } from "../models/model";
import { Droppable } from "react-beautiful-dnd";

import "./styles.css";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  closedTodos: Todo[];
  setClosedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  closedTodos,
  setClosedTodos,
}: props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided) => (
          <div
            className='todos'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todos__heading'>Open Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided) => (
          <div
            className='todos remove'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todos__heading'>Close Tasks</span>
            {closedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={closedTodos}
                key={todo.id}
                setTodos={setClosedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
