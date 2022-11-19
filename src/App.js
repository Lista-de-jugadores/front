import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ListPlayers from './components/ListPlayers/ListPlayers';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListPlayers />} exact />
      </Routes>
    </>
  );
}

export default App;
