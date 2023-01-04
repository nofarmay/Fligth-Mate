import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import '../Pages/Profile.css'

function Profile() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getDataFromApi() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5000/passengers/63b40237c624bde5ef1daf19"

        );
        console.log(data);
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, [])

  const drawdinamics = () => {
    return (
      <div>  <figure className="snip1336 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" alt="sample74" />
      <figcaption>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg" alt="profile-sample2" className="profile" />
        <h2>{`${results.name} ${results.lastName}`}<span>{results.occupation}</span></h2>
        <div> <div className="filght-details">
          <div className="line-wrap"><p>City</p><div><p>{results.city}</p></div></div>
          <div className="line-wrap"><p>Country</p><div><p>{results.country}</p></div></div>
          <div className="line-wrap"><p>Smoker</p><div><p>{results.smoker ? "Yes" : "No"}</p></div></div>
          <div className="line-wrap"><p>Hobbies</p><div><p>{results.hobbies}</p></div></div>
          {/* <div className="line-wrap"><p>Pets</p><div><p>{results.pets}</p></div></div> */}
          <div className="line-wrap"><p>Launguge</p><div><p>{results.launguges}</p></div></div>
          <div className="line-wrap"><p>Education</p><div><p>{results.education}</p></div></div>
          <div className="line-wrap"><p>Occupation</p><div><p>{results.occupation}</p></div></div>
        </div></div> 
  
        <Link to="/Profile" className="follow">Edit Profile</Link>
        <Link to="/Profile" className="info">Create</Link> 
      </figcaption>
    </figure>
      </div>
    )

  }
  return (
    <div>
 <div className='cardsContainer' style={{ marginTop: "100px" }}>{drawdinamics()}</div>
    </div>
  )
}
export default Profile;

