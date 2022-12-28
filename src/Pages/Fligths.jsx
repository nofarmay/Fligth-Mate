import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Pages/Fligths.css'
import Gallery from "../Components/Gallery"
function Fligths() {
    return (
        <div>
        <div className='fligthsupdatewrapper'>
            <h1 className="flight-title">Flights</h1>
            <div className="box-container">
                <div className="box">Upcoming</div>
                <div className="box">Past</div>
            </div>
            <div className="filght-details">
                <h2 className="filght-details">AM5520</h2>
                <div className='flights-time-container'>
                    <div className="filght-time">Mayy 11 06:00</div>
                    <div className="arrow"> --&gt; </div>
                    <div className="flight-time">May 11 08:18</div>
                </div>
            </div>
        </div>
        <h2>where are you going next ?</h2>
        <Gallery />
    </div>)

}
export default Fligths;