import React from 'react';
import './App.css';
import Login from './Component/Login';
import ChatRoom  from './Component/ChatRoom';
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";


function App() {
  return (
    <div className="container-fluid bg-dark text-dark d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
       <Router>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/chat/:roomID" element={<ChatRoom />}></Route>
          <Route path="*" element={<h1>No match</h1>}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
