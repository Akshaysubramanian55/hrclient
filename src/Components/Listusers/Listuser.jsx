import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import './Listuser.css'

function Listusers() {

    const [data, setData] = useState('');

    useEffect(() => {

        const fetchdata = async () => {
          const response= await axios.get('http://localhost:3100/getuser')
        //    const data = await response.json();
           if (response.ok) {
            setData(data.response); // Assuming the data structure matches the response from the backend
           } else {
               console.error("Error fetching users:", data.message);
           }
                
        }
        fetchdata();
    }, []);

    return(
        <>
        {data ? (data.map((data) => {
                return (
                    <div className="box" key={data.id}>
                        
                        <h1>name:{data.name}</h1>
                        <h1>email:{data.email}</h1>
                        <h1>phonenumber:{data.phonenumber}</h1>
                    </div>
                )
            })) : (<h1>Loading....</h1>)
            }
        </>
        
    )



      
}
export default Listusers