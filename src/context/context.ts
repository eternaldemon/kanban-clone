import { createContext } from "react";
import { TaskRecord } from "../interfaces/task";

interface KanbanContextType {
    tasks: TaskRecord;
    setTasks: React.Dispatch<React.SetStateAction<TaskRecord>>;
}

export const KanbanContext = createContext<KanbanContextType>({} as KanbanContextType);