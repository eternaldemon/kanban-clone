import { ReactNode, useEffect, useState } from "react";
import { mockTasks } from "../mock/mocks";
import { TaskRecord } from "../interfaces/task";
import { KanbanContext } from "./context";
import { TasksStorageKey } from "../constants/constants";

interface KanbanContextProviderProps {
  children?: ReactNode;
}

export const KanbanContextProvider: React.FC<KanbanContextProviderProps> = ({
  children,
}) => {

  const [tasks, setTasks] = useState<TaskRecord>(() => {
    const savedTasks = localStorage.getItem(TasksStorageKey);
    return savedTasks ? JSON.parse(savedTasks) : {...mockTasks};
  });

  useEffect(() => {
    const tasksToBeSaved = JSON.stringify(tasks);
    localStorage.setItem(TasksStorageKey, tasksToBeSaved);
  }, [tasks]);

  return (
    <KanbanContext.Provider value={{ tasks, setTasks }}>
      {children}
    </KanbanContext.Provider>
  );
};
