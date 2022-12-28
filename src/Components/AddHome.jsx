import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddHome.css";

function AddHome() {
  const [posted, setPosted] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [country, setCountry] = useState("");
  const [launguges, setLaunguges] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/passengers/",
        {
          name,
          lastName,
          city,
          country,
          launguges,
          occupation,
          education
        }
      );
      setName("")
      setlastName("")
      setCountry("")
      setLaunguges("")
      setCity("")
      setOccupation("")
      setEducation("")
       console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="add-home">
      <h1>Add Profile</h1>
      <form onSubmit={handleSubmit}>
        <br></br>
        <label htmlFor="name">Name</label>
        <br></br>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br></br>
        <label htmlFor="lastName"> last Name</label>
        <br></br>
        <input type="text" id=" lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />
        <br></br>
        <label htmlFor="city">City</label>
        <br></br>
        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        <br></br>
        <label htmlFor="country">Country</label>
        <br></br>
        <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
        <br></br>
        <label htmlFor="launguges">Launguges</label>
        <br></br>
        <input type="text" id="launguges" value={launguges} onChange={(e) => setLaunguges(e.target.value)} />
        <br></br>
        <label htmlFor="occupation">Occupation</label>
        <br></br>
        <input type="text" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        <br></br>
        <label htmlFor="education">Education</label>
        <br></br>
        <input type="text" id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default AddHome;