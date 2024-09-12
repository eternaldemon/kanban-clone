import { ColumnType } from "./column";

export interface Task {
    id: number;
    title: string;
    description?: string;
}

export type TaskRecord = {
    [key in ColumnType]: Task[];
};

export type SelectedTaskAndType = {
    type: ColumnType,
    task: Task
}