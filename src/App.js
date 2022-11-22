import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListPlayers from './views/ListPlayers/ListPlayers';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPlayers />} exact />
      </Routes>
    </>
  );
}

export default App;

