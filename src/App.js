import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Singup from './Components/Singup';
import Welcome from './Components/khach'; // Ensure the path is correct
import ELearning from './Components/Hocvien/Trangchu';
class App extends React.Component {
  render() {
    return (
          <ELearning/>
    );
  }
}

export default App;


{/*
<Router>
<div>
  <Routes>
    <Route path="/khach" element={<Welcome />} /> 
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Singup />} />
    <Route path="/" element={<Welcome />} />
  </Routes>
</div>
</Router>
 */}