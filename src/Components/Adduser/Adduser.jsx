import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom';

import mydraw from '../Adduser/images/backkk.avif'
import './Adduser.css'

function Adduser() {
    const [name, setName] = useState('');
    const [nameerror, setNameerror] = useState('');


    const [email, setEmail] = useState('')
    const [emailerror, setEmailerror] = useState('')

    const [password, setPassword] = useState('');
    const [passworderror, setPassworderror] = useState('');


    const [phonenumber, setPhonenumber] = useState('');
    const [phonenumbererror, setPhonenumbererror] = useState('');


    const [Address, setAddress] = useState('');
    const [Addresserror, setAddresserror] = useState('');


    const [pincode, setPincode] = useState('');
    const [pincodeerror, setPincodeerror] = useState('');


    const validatename = (value) => {
        const nameRegex = /^[a-z]{6,}$/i;
        if (!value) {
            setNameerror('enter Name')
        } else if (!nameRegex.test(value)) {
            setNameerror('Enter valid name')
        } else {
            setNameerror('')
        }
    }

    const validateemail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value) {
            setEmailerror('please enter your email')
        } else if (!emailRegex.test(value)) {
            setEmailerror("invalid Mail")
        } else {
            setEmailerror('')
        }
    }

    const validatepassword = (value) => {
        const passwordRegex = /^.{6,}$/

        if (!value) {
            setPassworderror('Enter your password')
        } else if (!passwordRegex.test(value)) {
            setPassworderror('Enter Valid Password')
        } else {
            setPassworderror('')
        }
    }

    const validatephonenumber = (value) => {
        const phoneRegex = /^[0-9]{10}$/

        if (!value) {
            setPhonenumbererror('Enter your password')
        } else if (!phoneRegex.test(value)) {
            setPhonenumbererror('Enter Valid Password')
        } else {
            setPhonenumbererror('')
        }
    }
    const validateAddress = (value) => {
        const AddressRegex = /^[a-zA-Z0-9\s.,-]{1,255}$/
        if (!value) {
            setAddresserror('enter Address');
        } else if (!AddressRegex.test(value)) {
            setAddress('invalid address')
        } else {
            setAddresserror('')
        }
    }

    const validatepincode = (value) => {
        const pincodeRegex = /^[0-9]{6}$/

        if (!value) {
            setPincodeerror('enter Pincode');
        } else if (!pincodeRegex.test(value)) {
            setPincodeerror('invalid Pincode')
        } else {
            setPincodeerror('')
        }
    }





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
            const responseData = await response.json();
            if (responseData.errors) {

                if(responseData.errors.name||responseData.errors.name_empty){
                    setNameerror(responseData.errors.name_empty||responseData.errors.name)
                }
                
                if(responseData.errors.email||responseData.errors.email_empty){
                    setEmailerror(responseData.errors.email_empty||responseData.errors.email)
                }

                if(responseData.errors.password_empty){
                    setPassworderror(responseData.errors.password_empty)
                }


                if(responseData.errors.phonenumber||responseData.errors.phonenumber_empty){
                    setPhonenumbererror(responseData.errors.phonenumber_empty||responseData.errors.phonenumber)
                }

                if(responseData.errors.Address_empty){
                    setAddresserror(responseData.errors.Address_empty)
                }

                if(responseData.errors.pincode||responseData.errors.pincode_empty){
                    setPincodeerror(responseData.errors.pincode_empty||responseData.errors.pincode)
                    // `Validation error:\n${validationErrors}`
                }
            } else {
                alert(responseData.message);
            }


            
        } catch (error) {
            console.error('Adding user failed:', error);
            alert(' failed. Please try again later.')
        }
    }

    return (
        <div className="dataforms">

            <div className='adddata' >

                <h2>Add-User</h2>

                <form className='adddetails' onSubmit={handleAdduser}>

                    <div>
                        <label htmlFor="name">Enter your UserName</label>
                        <input type="text" placeholder="Username" name='name' value={name} onChange={(e) => { setName(e.target.value), validatename(e.target.value) }} required />
                        {nameerror && <p className="error-message">{nameerror}</p>}
                    </div>

                    <div>

                        <label htmlFor="email">Enter your Email</label>
                        <input type="email" placeholder="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value); validateemail(e.target.value) }} required />
                        {emailerror && <p className="error-message">{emailerror}</p>}
                    </div>

                    <div>
                        <label htmlFor="password">Enter Your Password</label>
                        <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => { setPassword(e.target.value); validatepassword(e.target.value) }} required />
                        {passworderror && <p className="error-message">{passworderror}</p>}
                    </div>

                    <div>
                        <label htmlFor="phonenumber">Enter Your Phone Number</label>
                        <input type="phonenumber" placeholder="Enter Your Phone Number" name="phonenumber" value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value); validatephonenumber(e.target.value) }} required />

                        {phonenumbererror && <p className="error-message">{phonenumbererror}</p>}

                    </div>


                    <div>


                        <label htmlFor="address">Enter Your Address</label>
                        <input type="address" placeholder="Enter Your Address" name="Address" value={Address} onChange={(e) => { setAddress(e.target.value); validateAddress(e.target.value) }} required />
                        {Addresserror && <p className="error-message">{Addresserror}</p>}

                    </div>

                    <div>
                        <label htmlFor="pincode">Enter Your Pincode</label>
                        <input type="pincode" placeholder="Enter Your pincode" name="pincode" value={pincode} onChange={(e) => { setPincode(e.target.value); validatepincode(e.target.value) }} required />
                        {pincodeerror && <p className="error-message">{pincodeerror}</p>}

                    </div>




                    <div className='centre'>
                         <button type="submit" onClick={handleAdduser}>Add User</button>
                    </div>



                </form>
            </div>
            <div className="mydraw">
                <img src={mydraw} alt="#" />
            </div>
        </div>
    )
}

export default Adduser;