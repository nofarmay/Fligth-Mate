import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import "./Cards.css"
import SeatPopUp from './SeatPopUp';
function Cards({ filter, setChosenFligth, loggedUser, setloggedUser }) {
  const [results, setResults] = useState([]);
  const [popUp, setpopUp] = useState(false);
  const [filteredfligth, setFilteredFligth] = useState([])
  const seatInput = useRef()
  // console.log(filter)
  useEffect(() => {
    async function getDataFromApi() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5000/fligths/"
        );
        console.log(data);

        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);
  console.log(popUp);
  function displaypopUp(params) {
    // setpopUp(true)
    setpopUp(!popUp)

  }

  useEffect(() => {
    const filtered = results.filter((fligth) => fligth.fligthnum === filter)
    setFilteredFligth(filtered)
  }, [results])

  const drawData = () => {
    return filteredfligth.map((result) => {
      return (
        <div className='cards' key={result._id} >

          <div className="flight-card">
            <div className="flight-card-header">
              {/* <div class="flight-logo">
        <img src="https://book.jetblue.com/assets/header/img/jetblue-white-reg.png" alt=""/>
      </div> */}
              <div className="flight-data">
                <div className="passanger-details">
                  <span className="title">Passanger</span>
                  <span className="detail">Nofar Maymon</span>
                </div>
                <div className="passanger-depart">
                  <span className="title">Depart</span>
                  <span className="detail">{result.depart}</span>
                </div>
                <div className="passanger-arrives">
                  <span className="title">Arrives</span>
                  <span className="detail">{result.Arrives}</span>
                </div>
              </div>
            </div>
            <div className="flight-card-content">
              <div className="flight-row">
                <div className="flight-from">
                  <span className="from-code">{result.Acronymso}</span>
                  <span className="from-city">{result.Origin}</span>
                </div>
                <div className="plane">
                  <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt="" />
                </div>
                <div className="flight-to">
                  <span className="to-code">{result.Acronymsd}</span>
                  <span className="to-city">{result.destenation}</span>
                </div>
              </div>
              <div className="flight-details-row">
                <div className="flight-operator">
                  <span className="title">OPERATOR</span>
                  <span className="detail">{result.OPERATOR}</span>
                </div>
                <div className="flight-number">
                  <span className="title">CLASS</span>
                  <span className="detail">Economy</span>
                </div>
                <div className="flight-number">
                  <span className="title">FLIGHT</span>
                  <span className="detail">{result.fligthnum}</span>
                </div>

              </div>
            </div>
          </div>
          {/* <button onClick={displaypopUp}>claim your seat</button> */}
          {/* <input type="text" ref={seatInput} /> */}
          <SeatPopUp />


        </div>
      )
    })
  }
  return (
    <div>
      <div className='cardsContainer' style={{ marginTop: "100px" }}>{drawData()}</div>
    </div>
  )
}
export default Cards;

