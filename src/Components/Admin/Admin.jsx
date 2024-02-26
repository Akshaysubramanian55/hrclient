import React from "react";
import AdminNavbar from "./AdminNavbar";
import './Admin.css'
import myImage from './images/akshay.jpg';
import myQuery from './images/image1.png';
import Adminfooter from "./Adminfooter";


function Admin(){

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
          {/* <h2>Performance Analysis</h2>
            <img src={myQuery} alt="#" /> */}


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
