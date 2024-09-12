import { FormEvent, useContext, useEffect, useState } from "react";
import { ColumnInfo, ColumnType } from "../../interfaces/column";
import { KanbanColumns } from "../../constants/constants";

import "./KanbanBoard.css";
import { Column } from "../column/Column";
import { SelectedTaskAndType, Task, TaskRecord } from "../../interfaces/task";
import { Modal } from "../modal/Modal";
import { ManageTaskForm } from "../../forms/ManageTaskForm";
import { KanbanContext } from "../../context/context";

interface KanbanBoardProps {}

export const KanbanBoard: React.FC<KanbanBoardProps> = () => {
  const columns: ColumnInfo[] = [...KanbanColumns];
  const { tasks, setTasks } = useContext(KanbanContext);
  const [filteredTasks, setFilteredTasks] = useState<TaskRecord>(tasks ?? {} as TaskRecord);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTaskAndColumn, setSelectedTaskAndColumn] = useState<SelectedTaskAndType | null>(null);

  const generateRandomTaskId = (): string => {
    return crypto.randomUUID();
  };

  const handleTaskDragStart = (previousStatus: ColumnType, currentTask: Task) =>
    setSelectedTaskAndColumn({ type: previousStatus, task: currentTask });

  const handleTaskDragStop = (
    event: React.DragEvent<HTMLDivElement>,
    updatedStatus: ColumnType
  ) => {
    setTasks((os) => {
      return {
        ...os,
        [selectedTaskAndColumn?.type as ColumnType]: [
          ...os[selectedTaskAndColumn?.type as ColumnType].filter(
            (task) => task.id !== selectedTaskAndColumn?.task?.id
          ),
        ],
        [updatedStatus]: [
          ...os[updatedStatus].filter(
            (task) => task.id !== selectedTaskAndColumn?.task?.id
          ),
          { ...selectedTaskAndColumn?.task },
        ],
      };
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());
    const taskObj = {title: formValues.title, description: formValues.description || ""};

    // set tasks on the basis of if selectedTask has id (modifying task) or adding a whole new task
    setIsModalOpen(false);
    const currentData = {...selectedTaskAndColumn};
    setSelectedTaskAndColumn(null);

    setTasks((os)=> {
      if(currentData?.task?.id && currentData?.type){
        return {
          ...os,
          [currentData.type]: [...os[currentData.type].filter((task)=> task.id !== currentData.task?.id)],
          [formValues.type as ColumnType]: [...os[formValues.type as ColumnType], {id: currentData.task.id, ...taskObj}]
        }
      }
      else {
        return {
          ...os,
          [formValues.type as ColumnType]: [...os[formValues.type as ColumnType], {id: generateRandomTaskId(), ...taskObj}]
        }
      }
    });
    
  };

  const handleTaskEdit = (
    event: React.MouseEvent,
    currentStatus: ColumnType,
    currentTask: Task
  ) => {
    event.preventDefault();
    setSelectedTaskAndColumn({ type: currentStatus, task: currentTask });
    setIsModalOpen(true);
  };


  const handleTaskDelete = (currentStatus: ColumnType, id: number) => {
    setTasks((os)=> {
      return {
        ...os,
        [currentStatus]: os[currentStatus].filter((task) => task.id !== id)
      }
    })
  }

  const handleSearch = (value: string) => {
    if(!value) {
      setFilteredTasks(() => tasks);
      return;
    };
    setFilteredTasks(() => {
      return {
        [ColumnType.TO_DO]: [...tasks[ColumnType.TO_DO].filter((task) => task?.title?.toLowerCase()?.includes(value) || task?.description?.toLowerCase()?.includes(value))],
        [ColumnType.IN_PROGRESS]: [...tasks[ColumnType.IN_PROGRESS].filter((task) => task?.title?.toLowerCase()?.includes(value) || task?.description?.toLowerCase()?.includes(value))],
        [ColumnType.DONE]: [...tasks[ColumnType.DONE].filter((task) => task?.title?.toLowerCase()?.includes(value) || task?.description?.toLowerCase()?.includes(value))]
      };
    })
  }

  useEffect(() => {
    setFilteredTasks(() => tasks);
  }, [tasks])

  return (
    <div className="kanban">
      <div className="actions">
      <button className="add add-task-button" onClick={() => setIsModalOpen((os) => !os)}>Add New Task</button>
    <div className="field">
      <label htmlFor="search"></label>
      <input type="text" placeholder="Search here..." onChange={(event) => handleSearch(event.target.value)} />
    </div>
      </div>
      <div className="board">
        {columns.map((column) => {
          return (
            <Column
              key={column.id}
              label={column.type}
              tasks={filteredTasks?.[column.type] ?? []}
              onTaskDragStart={handleTaskDragStart}
              onTaskDragStop={handleTaskDragStop}
              onTaskEdit={handleTaskEdit}
              onTaskDelete={handleTaskDelete}
            />
          );
        })}
        <Modal
          isOpen={isModalOpen}
          data={{
            title: "Manage Task Details",
            content: (
              <ManageTaskForm
                currentSelection={selectedTaskAndColumn}
                handleSubmit={handleFormSubmit}
              />
            ),
          }}
          formId="manage-task-form"
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTaskAndColumn(null);
          }}
        />
      </div>
    </div>
  );
};
