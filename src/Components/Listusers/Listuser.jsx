import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom';

import axios from 'axios';
import './Listuser.css';
import myImage from '../Listusers/images/icons8-male-user-50.png'
import myMail from '../Listusers/images/icons8-mail-50.png'
import myPhone from '../Listusers/images/icons8-phone-50.png'
import Spinner from "../Spinner/Spinner";


function Listusers() {
    const [data, setData] = useState([]);
    const [loading,setLoading]=useState(true)
    const [token,setToken]=useState('')

    useEffect(()=>{

        const storedToken=localStorage.getItem('token');

        if(storedToken){
            setToken(storedToken);
        }

        console.log(token)
    },[]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3100/getuser',{
                  
                    headers: {
                         'Authorization': `Bearer ${token}`,
                       
                    },
                   
                });
                setData(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if(token){
            fetchData();
        }
       
    }, [token]);
  
    const HandleViewUser = (userId) => {
        if (userId !== undefined) {
            console.log("View button clicked for user ID:", userId);

        } else {
            console.error("User ID is undefined");
        }
    };


    return (
        <>


                <div className="header">
                    <h1>Users</h1>
                </div>
                <div className="labels">
                    <h1>Name</h1>
                    <h1>Email</h1>
                    <h1 className="phone">Phone Number</h1>
                </div>
                
                {loading ? ( // Display spinner if loading is true
                <Spinner />
            ) : (
                data.map((user) => (
                    <div className="box" key={user._id}>
                        <div className="box1">
                            <img src={myImage} alt="#" />
                            <p><input type="text" defaultValue={user.name} /></p>
                        </div>
                        <div className="box2">
                            <img src={myMail} alt="#" />
                            <p><input type="email" defaultValue={user.email} /></p>
                        </div>
                        <div className="box3">
                            <img src={myPhone} alt="#" />
                            <p><input type="phonenumber" defaultValue={user.phonenumber} /></p>
                        </div>
                        <div>
                            <Link to={`/detailsuser/${user._id}`}><button onClick={() => HandleViewUser(user._id)}>View</button></Link>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}


export default Listusers