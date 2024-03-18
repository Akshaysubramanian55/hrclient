import React, { useEffect, useState } from "react";

import './Resetpassword.css'

function Resetpassword() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            // Call your backend API to reset password here
            const response = await fetch('/reset-password', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${reset_token}` // Replace with actual token
                },
                body: JSON.stringify({ password })
            });

            if (!response.ok) {
                const responseData = await response.json();
                throw new Error(responseData.message || 'Failed to reset password');
            }

            // Password reset successful
            setErrorMessage("Password reset successful");
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    


    return (
        <>
            <h1>Reset Account Password</h1>

            <div className="container">

                <form onSubmit={handleSubmit}>
                    <div className="password">
                        <input type="password" id="password" name="password" required placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="confirm">
                        <input type="password" id="confirmpassword" name="confirmpassword" required placeholder="Confirm Your Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="submit">
                        <button>Submit</button>
                    </div>
                    {errorMessage && <div className="error">{errorMessage}</div>}
                </form>
            </div>


        </>
    )
}


export default Resetpassword;