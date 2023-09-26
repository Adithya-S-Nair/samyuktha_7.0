import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import 'mdb-ui-kit/css/mdb.min.css';
//Pages & Components
import Home from './Pages/MainPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App