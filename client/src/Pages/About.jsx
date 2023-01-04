import React from 'react'
import "./About.css"
import video from '../assets/video.mp4'
export default function About() {
    return (
        <div>
               <div className='main'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
            <div className='aboutwrapper' >
         <h1>Flight Mate: How does it work ?</h1>
         {/* CHANGE NEXT LINE HERE AND IN THE CSS TO H2 */}
        <div className='smallerheader'>You book the flight. We help you customize your experience.</div>
        <button className='Join'>Join the mates community!</button>
        <p>
Whether you're reading, sleeping, or holding a conversation, Flight Mate's interactive profile database allows you to customize your experience. You'll be able to read through passenger profiles to see who is the best match for your travel preferences. User profiles on Flight Mate can be customized to (optionally) include a profile picture, details on how you wish to spend the duration of your flight, and more.</p>

       <h2>How It Works ?</h2> 
 <div>When booking your flight and selecting your seat, open the Flight Mate app.
 Once the app is open, search your flight number.
 After finding your flight, search through passengers and claim a seat beside the user's profile who will give you an enjoyable flight experience.
 Return to your flight app and choose the seat number that corresponds to the one next to your Flight Mate's.
 Update your Flight Mate profile with your seat selection.
 Prepare for your trip and enjoy your flight!
 Search through nearby Flight Mate profiles to connect with users during layovers or while waiting at your gate.
 <br />
 <br />
 Have more questions?
Contact Our Team Today
<br />
<button>get in touch</button>
</div>
</div>
</div>
    )
}
