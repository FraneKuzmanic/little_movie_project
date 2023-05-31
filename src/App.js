import react from 'react';
import Home from './pages/Home';
import Movie from './pages/Movie';
import About from './pages/About';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:name' element={<Movie />} />
        <Route path='/about/' element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
