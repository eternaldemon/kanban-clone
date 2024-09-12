import { ColumnType } from "../../interfaces/column";
import { Task } from "../../interfaces/task";
import { TaskCard } from "../task-card/TaskCard";

import "./Column.css";

interface ColumnProps {
  onTaskDragStart: (previousStatus: ColumnType, task: Task) => void;
  onTaskDragStop: (event: React.DragEvent<HTMLDivElement>, updatedStatus: ColumnType) => void;
  onTaskEdit: (event: React.MouseEvent, currentStatus: ColumnType, task: Task) => void;
  onTaskDelete: (currentStatus: ColumnType, id: number) => void;
  label: ColumnType;
  tasks?: Task[];
}

export const Column: React.FC<ColumnProps> = ({
  onTaskDragStart,
  onTaskDragStop,
  onTaskEdit,
  onTaskDelete,
  label,
  tasks = [],
}) => {
  const getHeaderClass = (columnType: ColumnType) => {
    switch (columnType) {
      case ColumnType.TO_DO:
        return "to-do";
      case ColumnType.IN_PROGRESS:
        return "in-progress";
      default:
        return "done";
    }
  };

  return (
    <div className="column" onDrop={(event) => onTaskDragStop(event, label)} onDragOver={(event)=> event.preventDefault()}>
      <h2 className={`header ${getHeaderClass(label)}`}>{label}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} taskDetails={task} type={label} onTaskDragStart={onTaskDragStart} onTaskEdit={onTaskEdit} onTaskDelete={onTaskDelete} />
      ))}
      <div>{!tasks?.length && "No tasks yet"}</div>
    </div>
  );
};
