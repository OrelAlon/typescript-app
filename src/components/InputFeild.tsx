import { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form action='' className='input'>
      <input
        type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a Task'
        className='input__box'
      />
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputFeild;
