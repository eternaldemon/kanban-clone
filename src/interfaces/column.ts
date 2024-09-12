export enum ColumnType {
    TO_DO = "To Do",
    IN_PROGRESS = "In Progress",
    DONE = "Done"
}

export interface ColumnInfo {
    id: number;
    type: ColumnType; 
}
