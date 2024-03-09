import { ChangeEventHandler, FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { ToDoTask } from "../App";

interface InputProps {
  addTask: (task: ToDoTask) => void;
}

const Input: FC<InputProps> = ({ addTask }) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleValueChange: ChangeEventHandler<HTMLInputElement | HTMLFormElement> = (e) => {
    const values = e.target.value;

    setValue(values);
    setError("");
  };

  const handleAddTask = () => {
    if (!value) {
      setError("Input vacio");
      return;
    }

    const newTask: ToDoTask = { id: uuid(), toDo: value };
    addTask(newTask);
  };

  const handleSubmit: ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setValue("");
    handleAddTask;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-md overflow-hidden border-none p-0 text-gray-800">
        <input type="text" onChange={handleValueChange} value={value} className="h-12 bg-transparent border-none rounded-none px-2" />
        <button onClick={handleAddTask} className="h-12 bg-transparent rounded-none bg-green-400">
          Add
        </button>
      </div>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default Input;
