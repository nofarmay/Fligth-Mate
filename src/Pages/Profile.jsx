import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Pages/Profile.css'

function Profile() {
    return <div className='fligthsupdatewrapper'>
        <h1 className="flight-title">General Info</h1>
        <div className="filght-details">
           <div className="line-wrap"><p>City</p><div><p>Kfar Kara</p></div></div> 
           <div className="line-wrap"><p>Country</p><div><p>Israel</p></div></div> 
           <div className="line-wrap"><p>Smoker</p><div><p>No</p></div></div> 
           <div className="line-wrap"><p>Hobbies</p><div><p>Surfing</p></div></div> 
           <div className="line-wrap"><p>Pets</p><div><p>Horsy</p></div></div> 
           <div className="line-wrap"><p>Language</p><div><p>Hebrew,Arabic,English</p></div></div> 
           <div className="line-wrap"><p>Education</p><div><p>B.Sc</p></div></div> 
           <div className="line-wrap"><p>Occupation</p><div><p>Programer</p></div></div> 
        </div>
    </div>
}
export default Profile;