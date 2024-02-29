import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Listuser.css';
import myImage from '../Listusers/images/icons8-male-user-50.png'
import myMail from '../Listusers/images/icons8-mail-50.png'
import myPhone from '../Listusers/images/icons8-phone-50.png'

function Listusers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3100/getuser');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>

            <div className="overall">
                <div className="header">
                    <h1>Users</h1>
                </div>
                <div className="labels">
                    <h1>Name</h1>
                    <h1>Email</h1>
                    <h1 className="phone">Phone Number</h1>
                </div>
                {data.length ? (
                    data.map((user) => (
                        <div className="box" key={user.id}>
                            <div className="box1">
                                <img src={myImage} alt="#" />
                                <p> {user.name}</p>
                            </div>
                            <div className="box2">
                                <img src={myMail} alt="#" />
                                <p> {user.email}</p>
                            </div>
                            <div className="box3">
                                <img src={myPhone} alt="#" />
                                <p> {user.phonenumber}</p>
                            </div>
                            <div>
                                <button>View</button>

                            </div>


                        </div>
                    ))
                ) : (
                    <h1>Loading....</h1>
                )}
            </div>

        </>
    );
}


export default Listusers