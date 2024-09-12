# Overview:
Build a single-page Kanban-style to-do application using ReactJs / NextJs / Vanilla Javascript.
The application will feature multiple columns (e.g., "To Do", "In Progress", "Done") and allow
users to manage tasks by dragging and dropping them between these columns.

## Requirements:
1. Columns and Tasks:
   
    a. Create at least three columns: "To Do", "In Progress", and "Done".
  
    b. Allow tasks to be added to any column.
    
    c. Tasks should be represented as cards with a title and description.
  
2. Task Management:
   
    a. Users should be able to add new tasks with a title and description.
    
    b. Implement functionality to edit and delete tasks.
    
    c. Tasks should be moveable between columns using drag-and-drop.
  
3. Drag-and-Drop Functionality:
   
    a. Implement drag-and-drop so tasks can be moved between columns.
  
    b. The status of a task should be updated based on the column it is dropped into.
  
4. State Management:
   
    a. Use React Context / Redux / another state management solution to manage tasks and columns.
  
    b. Ensure the application's state persists across page reloads.
  
5. Styling:
   
    a. Design a user-friendly interface that clearly distinguishes between different columns and tasks.
  
    b. Implement smooth and intuitive drag-and-drop interactions.
  
6. Optional Features (Bonus):
   
    a. Implement task filtering or searching by keyword.
  
    b. Add due dates to tasks and highlight overdue tasks.
    
    c. Allow tasks to be reordered within the same column by dragging.
    
    d. Functional codes preferred

# Deployment
This CRA is deployed using vercel and the URL is https://kanban-clone-kappa.vercel.app/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions for running the application (Available Scripts)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
