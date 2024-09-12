import {  ColumnInfo, ColumnType } from "../interfaces/column";

export const TasksStorageKey = "savedTasks";

export const KanbanColumns: ColumnInfo[] = [
    {
        id: 1, type: ColumnType.TO_DO
    },
    {
        id: 2, type: ColumnType.IN_PROGRESS
    },
    {
        id: 3, type: ColumnType.DONE
    }
]