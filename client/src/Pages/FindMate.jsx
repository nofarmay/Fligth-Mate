import React from 'react'
import { Link } from "react-router-dom"
import '../Pages/FindMate.css'

function FindMate({ setFilter,filter,setSearchvalue }) { 
    // const [passenger,setPassenger] = useState([])
    const chosenCity = () => {
        // setFilter(city);  
    }
    return (
        <> <div>
            <div className='homewrapper' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/img/terminal.jpg"
})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >

                <div className='searchBox'>
                    <input className="form-control" placeholder="Enter value"
                        role="combobox" onChange={(e) => {setSearchvalue(e.target.value)
                        }} />
                        <select onChange={(e) => {setFilter(e.target.value)}}>
  <option value="">filter</option>
  <option value="name">name</option>
  <option value="launguges">language</option>
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

export default FindMate;




