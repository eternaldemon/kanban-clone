import './App.css';
import { KanbanBoard } from './components/kanban-board/KanbanBoard';
import { KanbanContextProvider } from './context/provider';

function App() {
  return (
    <KanbanContextProvider>
    <div className="App">
      <h1>KANBAN BOARD CLONE</h1>
      <KanbanBoard />
    </div>
    </KanbanContextProvider>
  );
}

export default App;
