import React, {useState} from 'react'
import { Link } from "react-router-dom"
import './HomePage.css'

function HomePage({ setFilter }) {
    const [city, setCity] = useState("")

    const cityName = (e) => {
        setCity(e.target.value)
    }
    // console.log(city)

    const chosenCity = () => {
        setFilter(city);

    }
    return (

        <>
            <div className='homewrapper' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/img/train.avif"
})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <div className='slogen'><h2>Travel more with figth mate </h2></div>
                <div className='des'><h3>search for your up coming fligth </h3></div>
                <br></br>
                <br></br>
                <div className='searchBox'>
                    <input className="form-control" placeholder="Enter your flight number"
                        role="combobox" onChange={cityName} />
                    <Link to="/Cards">
                        <button onClick={chosenCity}><span className="material-symbols-outlined">
                            search
                        </span> search</button>
                    </Link>
                </div>
                <br></br>
                <br></br>
                <div className="subswrapper">
                    <div>100,000 <br></br> subs</div>
                    <div>+130 <br></br>Contries</div>
            
                </div>
            </div>
         
        </>
    )
}
export default HomePage;