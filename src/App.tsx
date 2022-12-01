import { useState } from "react";

import InputFeild from "./components/InputFeild";
import { Todo } from "./models/model";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className='App'>
      <span className='heading'>To - Do With Type-Script</span>
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
