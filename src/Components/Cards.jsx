import React, { useEffect, useState } from 'react'
// import Card from './Card';
import axios from "axios"
import { Link } from "react-router-dom"
import "./Cards.css"
function Cards({ filter, setChosenFligth }) {
  const [results, setResults] = useState([]);
  // const [showCard, setShowCard] = useState(true);
  const [filteredfligth, setFilteredFligth] = useState([])
  // const [id, setId] = useState(null)
  console.log(filter)
  useEffect(() => {
    async function getDataFromApi() {
      try {
        const { data } = await axios.get(
          "https://6374b4b508104a9c5f869829.mockapi.io/Data/fligths"
        );
        console.log(data);

        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);


  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://6374b4b508104a9c5f869829.mockapi.io/Data/fligths/${id}`
      );
      setResults((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const filtered = results.filter((fligth) => fligth.fligthnum === filter)
    setFilteredFligth(filtered)
  }, [results])
  const drawData = () => {
    return filteredfligth.map((result, i) => {
      return (
        <div className='cards' key={i}
        >
          <Link to="/card">
            <img src={result.avatar} style={{ height: "60%", width: "100%" }} alt={result.id}
              onClick={() => {
                setChosenFligth(result.id)
              }}
            />
          </Link>
          <h5>{result.name}</h5>
          <h5>{result.city}</h5>
          <h5>{result.description}</h5>
          <button onClick={() => deleteData(result.id)}>Remove</button>
        </div>
      )
    })
  }
  return (
    <div><div className='cardsContainer' style={{ marginTop: "100px" }}>{drawData()}</div>
    <div className="flight-card">
    <div className="flight-card-header">
      {/* <div class="flight-logo">
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
 </div>
    </div>
  )
}
export default Cards;