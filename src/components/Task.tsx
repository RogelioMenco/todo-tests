import { FC } from "react";
import { ToDoTask } from "../App";

interface TaskProps {
  task: ToDoTask;
  deleteTask: (id: string) => void;
}

const Task: FC<TaskProps> = ({ task, deleteTask }) => {
  return (
    <div className="bg-slate-600 rounded-xl flex justify-between overflow-hidden my-3">
      <p className="m-3">{task.toDo}</p>
      <button className="text-red-400 bg-slate-700 rounded-none text-lg py-2 px-4" onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  );
};

export default Task;
