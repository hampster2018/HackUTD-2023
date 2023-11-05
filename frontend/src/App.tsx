import { useState, useEffect } from 'react'
import SpritePage from './SpritePage';
import KanbanPage from './kanban/KanbanPage';
import './App.css';
import getTasks from './api/get_tasks';
import { Button } from '@mui/material';

function App() {

  const useStyle = {
    Button: {
        backgroundColor: '#E5F4FF',
        color: 'black',
        position: 'fixed', 
        left: 50, 
        top: 50,
        boxShadow: '1px 1px 1px #D0D0D0',
        
      "&:hover": {
        backgroundColor: "#A9DAFF !important",
        color: 'black',
        boxShadow: "'1px 1px 1px #D0D0D0' !important",
      },
      "&:active": {
        boxShadow: "none !important",
        backgroundColor: "#3c52b2 !important",
      },
    },
  };

  const [onGame, setOnGame] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    getTasks(setTasks, setColumns);
  }, []);

  return (
    <>
      <Button sx={useStyle.Button} onClick={() => setOnGame(!onGame)}>Start Game</Button>
      {onGame ? 
        <SpritePage setOnGame={setOnGame} setKanbanData={setTasks}/> 
        : 
        <KanbanPage tasks={tasks} columns={columns} setTasks={setTasks} setColumns={setColumns}/>
      }
    </>

  )
}

export default App
