import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import 'mdb-ui-kit/css/mdb.min.css';

//Pages & Components
import HomePage from './Pages/MainPage'
import AdminPage from './Pages/Adminpage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/admin' element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App