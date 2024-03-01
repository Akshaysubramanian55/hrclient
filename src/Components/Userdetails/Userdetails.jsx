import React from "react";
import HandleViewUser from "../Handleviewer/Handleviewer";
import './Userdetails.css'

function Userdetails() {

    return (
        <div className="formss">

            <div>
                <label htmlFor="name"  >Enter Your Name</label>
                <input type="text" name="name" />
            </div>

            <div>
                <label htmlFor="mail">Enter your Name</label>
                <input type="mail" name="name" />
            </div>
            <div>
                <label htmlFor="phonenumber">Enter Your phonenumber</label>
                <input type="phonenumber" name="phonenumber"/>
            </div>
            <div>
                <label htmlFor="address">Enter Your address</label>
                <input type="address" name="address" />
            </div>

            <div>
                <label htmlFor="pincode">Enter Your pincode</label>
                <input type="pincode" name="pincode" />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>


        </div>
    )
}

export default Userdetails;