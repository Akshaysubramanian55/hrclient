import React from "react";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from 'react-router-dom';

import './Admin.css'
import myImage from './images/akshay.jpg';
import myQuery from './images/image1.png';
import Adminfooter from "./Adminfooter";
import Swal from "sweetalert2";



function Admin(){
  
  const navigate = useNavigate();


  const isTokenpresent = () => {
  
    const token = localStorage.getItem('token');
    return !!token; 
  };

  if (!isTokenpresent()) {
    Swal.fire({
        title: "Error",
        text: "You need to login to access the admin area.",
        icon: "error",
        button: "Login",
    }).then(() => {
        navigate('/login');
    });
    
    return null;
}

    return(
        <>
        <AdminNavbar/>

        <div className="adminlogin">


          <div className="hii">

           <img src={myImage} alt="#" />

            <h1>Akshay</h1>
            <ul className="adminlist">
                <li>Edit profile</li>
                <li>Settings</li>
                <li>Delete User</li>
            </ul>
          
          </div>

          <div className="query">
         


            <h1>Welcome</h1>
            
          </div>


        </div>
        <div className="footer">
        <Adminfooter/>
        </div>
       
        </>
    )
}

export default Admin;
