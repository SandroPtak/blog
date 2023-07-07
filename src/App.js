import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/acessar">Login</Link>
        <Link to="/criar-post">Criar Post</Link>
      </nav>
      <Routes>
        <Route path="/pagina-inicial" element={<Home/>}/>
        <Route path="/acessar" element={<Login/>}/>
        <Route path="/criar-post" element={<CreatePost/>}/>
        <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
