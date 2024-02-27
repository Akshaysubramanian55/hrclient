import React, { useState } from "react";
import './Adduser.css'

function Adduser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [Address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');

    const handleAdduser = async (e) => {

        try {

            const data = { name, email, password, phonenumber, Address, pincode };
            const json_data = JSON.stringify(data);
            console.log("json_data : ", json_data)

            const response = await fetch('http://localhost:3100/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: json_data,
            });

            if (response.message='success') {
                
                alert(response.message);
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error('Adding user failed:', error);
            alert(' failed. Please try again later.')
        }
    }

    return (


        <div className='adddata' >

            <h2>Add-User</h2>
            <form className='adddetails' onSubmit={handleAdduser}>
                <label htmlFor="name">Enter your UserName</label>
                <input type="text" placeholder="Username" name='name' value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Enter your Email</label>
                <input type="email" placeholder="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="phonenumber">Enter Your Phone Number</label>
                <input type="text" placeholder="Enter Your Phone Number" name="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />

                <label htmlFor="address">Enter Your Address</label>
                <input type="address" placeholder="Enter Your Address" name="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />

                <label htmlFor="pincode">Enter Your Pincode</label>
                <input type="pincode" placeholder="Enter Your pincode" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />

                <div className='centre'>
                    <button type="submit" >Add User</button>
                </div>

            </form>
        </div>
    )

}
export default Adduser;