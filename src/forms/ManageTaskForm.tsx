import { FormEvent, useEffect, useState } from "react";
import { ColumnType } from "../interfaces/column";
import "./Form.css";
import { SelectedTaskAndType, Task } from "../interfaces/task";

interface ManageTaskFormProps {
  handleSubmit: (event: FormEvent) => void;
  currentSelection: SelectedTaskAndType | null
}

export const ManageTaskForm: React.FC<ManageTaskFormProps> = ({handleSubmit, currentSelection}) => {

  const [localTask, setLocalTask] = useState<SelectedTaskAndType | null>(null);
  const handleFieldEdit = (value: string, field: 'title' | 'description' | 'type') => {
    setLocalTask((os)=> {
      const newState = {...os};
      if(field === 'type') newState.type = value as ColumnType;
      newState.task = {...newState?.task, [field]: value}  as Task
      return newState as SelectedTaskAndType;
    })
  }

  useEffect(() => {
    setLocalTask(currentSelection);
    return () => setLocalTask(null);
  }, [currentSelection])

  return (
    <form data-taskid={currentSelection?.task?.id} id="manage-task-form" className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="task-title">Title</label>
        <input id="task-title" placeholder="Enter task title here" name="title" defaultValue={currentSelection?.task?.title} onChange={(event) => handleFieldEdit(event.target.value, 'title')} required />
      </div>
      <div className="field">
        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          placeholder="Enter task description here"
          name="description"
          defaultValue={currentSelection?.task?.description}
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
