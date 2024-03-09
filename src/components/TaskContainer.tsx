import { FC } from "react";
import Task from "./Task";
import { ToDoTask } from "../App";

interface TaskContainerProps {
  tasks: ToDoTask[];
  deleteTask: (id: string) => void;
}

const TaskContainer: FC<TaskContainerProps> = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskContainer;
