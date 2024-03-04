import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom';

import './AdminNavbar.css'

function AdminNavbar() {
    return (
        <>
            <nav>
                <div className="listnav">
                    <h3>Welcome</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Services</li>

                    </ul>
                    <div className="buttonss">
                        <div className="button1">
                        <Link to="/adduser"><button type="submit">Add</button></Link>
                        </div>
                        <div className="button2">
                        <Link to="/getuser"><button type="submit">Users</button></Link>

                        </div>
                        
                    </div>



                </div>
            </nav>
        </>
    )
}


export default AdminNavbar;