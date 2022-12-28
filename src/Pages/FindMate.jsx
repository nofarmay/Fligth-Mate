import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Pages/FindMate.css'
import background from "../img/terminal.jpg"

function FindMate({ setFilter,filter,setSearchvalue }) {
    // const [searchvalue, setSearchvalue] = useState("")
    const [passenger,setPassenger] = useState([])
    const cityName = (e) => {
        // setCity(e.target.value)
    }
  
    const chosenCity = () => {
        // setFilter(city);
        
    }
    return (
        <> <div>
            <div className='homewrapper' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >

                <div className='searchBox'>
                    <input className="form-control" placeholder="Enter value"
                        role="combobox" onChange={(e) => {setSearchvalue(e.target.value)
                        }} />
                        <select onChange={(e) => {setFilter(e.target.value)}}>
  <option value="">filter</option>
  <option value="name">name</option>
  <option value="languae">language</option>
  <option value="city">city</option>
  <option value="country">country</option>
  <option value="hobbies">hobbies</option>
  <option value="occupation">occupation</option>
  <option value="education">education</option>
</select>

                    <Link to="/Mates">
                        <button onClick={chosenCity}><span className="material-symbols-outlined">
                            search
                        </span> search</button>
                    </Link>
                </div>
            </div>
        </div>
        </>

    )
}
// TODO update it to mates and not houses
export default FindMate;




