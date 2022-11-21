import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListPlayers from './views/ListPlayers/ListPlayers';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route path="/" element={<ListPlayers />} exact />
      </Routes>
    </>
  );
}

export default App;
