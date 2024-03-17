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
    const [loading, setLoading] = useState(true);
    const [currentpage, setCurrentpage] = useState(1);
    const [itemsperpage] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [token, setToken] = useState('');

    useEffect(() => {

        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            setToken(storedToken);
        }

        console.log(token)
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3100/getuser', {

                    params: {
                        page: currentpage,
                        limit: itemsperpage,
                    },


                    headers: {
                        'Authorization': `Bearer ${token}`,

                    },

                });
                setData(response.data.data);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (token) {
            fetchData();
        }

    }, [token, currentpage, itemsperpage]);

    const HandleViewUser = (userId) => {
        if (userId !== undefined) {
            console.log("View button clicked for user ID:", userId);

        } else {
            console.error("User ID is undefined");
        }
    };

    const nextPage = () => {
        if (currentpage < totalPages) {
            setCurrentpage(currentpage + 1);
        }
    };

    const prevPage = () => {
        if (currentpage > 1) {
            setCurrentpage(currentpage - 1);
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

            <div className="pagination">
            <button onClick={prevPage} disabled={currentpage === 1}>Prev</button>
                        <span>{currentpage} of {totalPages}</span>
                        <button onClick={nextPage} disabled={currentpage === totalPages}>Next</button>
            </div>
        </>
    );
}


export default Listusers