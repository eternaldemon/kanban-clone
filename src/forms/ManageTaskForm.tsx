import { FormEvent } from "react";
import { ColumnType } from "../interfaces/column";
import "./Form.css";
import { SelectedTaskAndType } from "../interfaces/task";

interface ManageTaskFormProps {
  handleSubmit: (event: FormEvent) => void;
  currentSelection: SelectedTaskAndType | null
}

export const ManageTaskForm: React.FC<ManageTaskFormProps> = ({handleSubmit, currentSelection}) => {

  return (
    <form id="manage-task-form" className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="task-title">Title</label>
        <input id="task-title" placeholder="Enter task title here" name="title" value={currentSelection?.task?.title} required />
      </div>
      <div className="field">
        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          placeholder="Enter task description here"
          name="description"
          value={currentSelection?.task?.description}
        ></textarea>
      </div>
      <div className="field">
        <label htmlFor="task-type">Type</label>
        <select id="task-type" name="type" defaultValue={currentSelection?.type} required>
          <option disabled value="">
            Choose Type
          </option>
          <option value={ColumnType.TO_DO}>{ColumnType.TO_DO}</option>
          <option value={ColumnType.IN_PROGRESS}>
            {ColumnType.IN_PROGRESS}
          </option>
          <option value={ColumnType.DONE}>{ColumnType.DONE}</option>
        </select>
      </div>
    </form>
  );
};
