import logo from './logo.svg';
import './App.css';
import "./Components/Navbar"
import Navbar from './Components/Navbar';
import Modes from './Components/Modes';
import {BrowserRouter,Routes,Route,Router} from "react-router-dom";

import Game from "./Components/Game"
function App() {
  
  return (
    <>
    <Navbar/>
    <Modes/>
    
    </>
    
    
  );
}

export default App;
