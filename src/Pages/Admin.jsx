import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Pages/Admin.css'

function Admin() {
    return <div><div className="flight-card">
    <div className="flight-card-header">
      {/* <div className="flight-logo">
        <img src="https://book.jetblue.com/assets/header/img/jetblue-white-reg.png" alt=""/>
      </div> */}
      <div className="flight-data">
          <div className="passanger-details">
            <span className="title">Passanger</span>
            <span className="detail">John Doe</span>
          </div>
          <div className="passanger-depart">
            <span className="title">Depart</span>
            <span className="detail">09:30 AM</span>
          </div>
          <div className="passanger-arrives">
            <span className="title">Arrives</span>
            <span className="detail">18:30 PM</span>
          </div>
        </div>
    </div>
   <div className="flight-card-content">
     <div className="flight-row">
       <div className="flight-from">
         <span className="from-code">TIA</span>
         <span className="from-city">Tirane, Albania</span>
       </div>
       <div className="plane">
         <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
       </div>
       <div className="flight-to">
         <span className="to-code">MUC</span>
         <span className="to-city">Munich, Germany</span>
       </div>
     </div>
     <div className="flight-details-row">
       <div className="flight-operator">
         <span className="title">OPERATOR</span>
         <span className="detail">Jetblue Airways</span>
       </div>
       <div className="flight-number">
         <span className="title">FLIGHT</span>
         <span className="detail">JT22554D</span>
       </div>
       <div className="flight-class">
         <span className="title">CLASS</span>
         <span className="detail">Economy</span>
       </div>
     </div>
   </div>
 </div></div>
}
export default Admin;