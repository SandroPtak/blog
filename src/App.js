import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {

  const [ isAuth, setIsAuth ] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/acessar";
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {isAuth && <Link to="/criar-post">Criar Post</Link>}
        {!isAuth ? <Link to="/acessar">Login</Link> : <button onClick={signUserOut}>Sair</button>}
      </nav>
      <Routes>
        <Route path="/pagina-inicial" element={<Home/>}/>
        <Route path="/acessar" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/criar-post" element={<CreatePost/>}/>
        <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
