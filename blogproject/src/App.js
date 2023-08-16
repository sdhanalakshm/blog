import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBlog from "./pages/MyBlog";
import Comments from "./pages/Comments";
import CreatePost from './pages/CreatePost';
import Register from './pages/Register';
import { useState } from 'react';
import { signOut } from 'firebase/auth';

import { auth } from './firebase-config';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";

    });
  };

  return (<Router>
    <nav>
      <Link style={{ color: 'blue' }} to="/"> Home </Link>
      
      {!isAuth ? <Link style={{ color: 'blue' }} to="/login"> Login </Link> : 
      (
        <>
          <Link style={{ color: 'blue', marginRight: '10px' }} to="/myblog"> MyBlog </Link>
          <Link style={{ color: 'blue' }} to="/createpost"> CreatePost </Link>
          <i style={{marginLeft: '30px' }} class="fa fa-sign-out" onClick={signUserOut}></i>
          <div style={{ marginLeft: '10px' }}>Logged in as: {localStorage.getItem("userName")}</div>
        </>
      )}
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myblog" element={<MyBlog isAuth={isAuth}/>} />
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      <Route path="/comments" element={<Comments isAuth={isAuth}/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
  );
}

export default App;
