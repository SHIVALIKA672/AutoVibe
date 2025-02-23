import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <Router>
     <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
