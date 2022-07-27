import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import TutorialBattle from './components/TutorialBattle';
import AuthContextProvider from './context/AuthContextProvider';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/log-in" element={<LoginPage/>}/>
          <Route path="/welcome" element={<WelcomePage/>}/>
          <Route path="/tutorial-battle" element={<TutorialBattle/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
