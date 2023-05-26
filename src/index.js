import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/index"
import Logement from "./pages/logement/index"
import Error from "./pages/error/index"
import Propos from "./pages/propos/index"
import Header from "./components/Header"
import "./styles/index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Logement' element={<Logement />} />
        <Route path='/Error' element={<Error />} />
        <Route path='/Propos' element={<Propos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)