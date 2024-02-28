import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Listuser.css';

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
                       
                        <p>{user.name}</p>
                        <p> {user.email}</p>
                        <p> {user.phonenumber}</p>
                    </div>
                ))
            ) : (
                <h1>Loading....</h1>
            )}
        </>
    );
}


export default Listusers