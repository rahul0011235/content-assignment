import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import './styles/index.css';

const App = () => {
  return (
    <div className="app-container">
      <KanbanBoard />
    </div>
  );
};

export default App;