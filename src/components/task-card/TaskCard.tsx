import { ColumnType } from "../../interfaces/column";
import { Task } from "../../interfaces/task";
import "./TaskCard.css";

export interface TaskCardProps {
  onTaskDragStart: (currentStatus: ColumnType, task: Task) => void;
  onTaskEdit: (event: React.MouseEvent, currentStatus: ColumnType, task: Task) => void;
  onTaskDelete: (currentStatus: ColumnType, id: number) => void;
  type: ColumnType,
  taskDetails: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  onTaskDragStart,
  onTaskEdit,
  onTaskDelete,
  type,
  taskDetails,
}) => {
  
  return (
    <div
      className="task-card"
      draggable
      onDragStart={() => onTaskDragStart(type, taskDetails)}
    >
      <button type="button" className="edit edit-button" onClick={(event)=> onTaskEdit(event, type, taskDetails)}>Edit</button>
      <button type="button" className="delete delete-button" onClick={(event)=> onTaskDelete(type, taskDetails?.id)}>Delete</button>
      <h3>{taskDetails.title}</h3>
      <p>{taskDetails?.description ?? "No description provided"}</p>
    </div>
  );
};
