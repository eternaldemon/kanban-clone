import { ColumnType } from "../interfaces/column";
import { TaskRecord } from "../interfaces/task";

export const mockTasks: TaskRecord = {
    [ColumnType.TO_DO]: [{
        "id": 1,
        "title": "Task 1",
        "description": "Description 1"
    },
    {
        "id": 2,
        "title": "Task 2",
        "description": "Description 2"
    },
    {
        "id": 3,
        "title": "Task 3",
        "description": "Description 3"
    }],
    [ColumnType.IN_PROGRESS]: [{
        "id": 4,
        "title": "1st Task in Progress",
        "description": "Description 4"
    }, {
        "id": 5,
        "title": "2nd Task in Progress",
        "description": "Description 5"
    }],
    [ColumnType.DONE]: [{
        "id": 6,
        "title": "Only Done Task",
        "description": "Description 6"
    }]
}