import { FC, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Input from "./components/Input";
import TaskContainer from "./components/TaskContainer";
import UserRender from "./components/UserRenderer";

export type ToDoTask = {
  id: string;
  toDo: string;
};

const App: FC = () => {
  const [tasks, setTasks] = useState<ToDoTask[]>([]);

  const handleDeleteTask = (taskId: string): void => {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id != taskId));
  };

  const handleAddTask = (task: ToDoTask) => {
    setTasks((oldTasks) => [...oldTasks, task]);
  };

  return (
    <>
      <Title />
      <Input addTask={handleAddTask} />
      <TaskContainer tasks={tasks} deleteTask={handleDeleteTask} />
      <UserRender />
    </>
  );
};

export default App;
