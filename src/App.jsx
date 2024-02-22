import React from 'react'
import Landingpage from './Components/Landing/Landing'
import Adduser from './Components/Adduser/Adduser'
import Login from './Components/Login/Login'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Landingpage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path='/adduser' exact element={<Adduser/>}/>
        </Routes>



      </div>
    </Router>
  )
}

export default App
