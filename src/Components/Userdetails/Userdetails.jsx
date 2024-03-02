import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Userdetails/Userdetails.css'
import myback from '../Userdetails/images/listimage.avif'

function Userdetails() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3100/getuser/${userId}`);
                setUser(response.data); // Assuming response.data contains user details
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchData();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }
    return (

        <div className="totally">

            <div className="imagee">
                <img src={myback} alt="#" />
            </div>
            <div>
                <div className="formss">

                    <div >
                        <label htmlFor="name"  >Enter Your Name</label>
                        <input type="text" name="name" defaultValue={user ? user.name : ''} readOnly />
                    </div>

                    <div>
                        <label htmlFor="mail">Enter your Name</label>
                        <input type="mail" name="name" defaultValue={user ? user.email : ''} readOnly />
                    </div>
                    <div>
                        <label htmlFor="phonenumber">Enter Your phonenumber</label>
                        <input type="phonenumber" name="phonenumber" defaultValue={user ? user.phonenumber : ''} readOnly />
                    </div>
                    <div>
                        <label htmlFor="address">Enter Your address</label>
                        <input type="address" name="address" defaultValue={user ? user.Address : ''} readOnly />
                    </div>

                    <div>
                        <label htmlFor="pincode">Enter Your pincode</label>
                        <input type="pincode" name="pincode" defaultValue={user ? user.pincode : ''} readOnly />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Userdetails;