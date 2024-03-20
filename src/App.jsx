import React from 'react'
import Landingpage from './Components/Landing/Landing'
import Adduser from './Components/Adduser/Adduser'
import Login from './Components/Login/Login'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom';
import Admin from './Components/Admin/Admin'
import Listusers from './Components/Listusers/Listuser'
import Userdetails from './Components/Userdetails/Userdetails'
import Resetpassword from './Components/Resetpassword/Resetpassword'
import ForgotPassword from './Components/Forgotpassword/Forgotpassword'
import ChangePassword from './Components/Changepassword/Changepassword'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Landingpage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path='/adduser' exact element={<Adduser/>}/>
          <Route path='/admin'    exact element={<Admin/>}/>
          <Route path='/getuser'    exact element={<Listusers/>}/>
          <Route path='/detailsuser/:userId' exact element={<Userdetails/>}/>
          <Route path='/reset-password' exact element={<Resetpassword/>}/>
          <Route path='/forgotpassword' exact element={<ForgotPassword/>}/>
          <Route path='/changepassword' exact element={<ChangePassword/>}/>
        </Routes>



      </div>
    </Router>
   

    
     
  )
}

export default App
