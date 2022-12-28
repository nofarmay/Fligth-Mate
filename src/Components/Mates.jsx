import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import "./Mates.css"

function Mates({ filter, setChosenMate,searchvalue}) {
  const [results, setResults] = useState([]);
  const [showCard, setShowCard] = useState(true);
  const [filteredmate, setFilteredMate] = useState([])
  const [id, setId] = useState(null)
  // console.log(filter)
  // console.log(searchvalue)
  useEffect(() => {
    async function getDataFromApi() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5000/passengers/"
        );
        // console.log(data);

        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);

  useEffect(() => {
    const filtered = results.filter((mate) => {
console.log(mate);
      return mate.filter!==searchvalue
    }
    )
    console.log(filtered);
    // setFilteredMate(filtered)

  }, [results])

  const drawdinamic = () => {
      //  console.log(filteredmate);
        return filteredmate.map((result, i) => {
      return (
        <div className='cards' key={i}
        >
       
          <div className='fligthsupdatewrapper'>
        <h1 className="flight-title">General Info</h1>
        <div className="filght-details">
           <div class className="line-wrap"><p>City</p><div><p>{result.city}</p></div></div> 
           <div class className="line-wrap"><p>Country</p><div><p>{result.country}</p></div></div> 
           <div class className="line-wrap"><p>Smoker</p><div><p>{result.smoker}</p></div></div> 
           <div class className="line-wrap"><p>Hobbies</p><div><p>{result.Hobbies}</p></div></div> 
           <div class className="line-wrap"><p>Pets</p><div><p>Horsy</p></div></div> 
           <div class className="line-wrap"><p>Language</p><div><p>{result.launguges}</p></div></div> 
           <div class className="line-wrap"><p>Education</p><div><p>{result.Education}</p></div></div> 
           <div class className="line-wrap"><p>Occupation</p><div><p>{result.Occupation}</p></div></div> 
        </div>
    </div>
        </div>
      )
    })
  }
  return (
    <div>
     {/* //<div className='cardsContainer' style={{ marginTop: "100px" }}>{drawData()}</div> */}
    <div className='cardsContainer' style={{ marginTop: "100px" }}>{drawdinamic()}</div>
  
    </div>
  )
}  
export default Mates;



// TODO move to admin
//   const deleteData = async (id) => {
//     try {
//       const { data } = await axios.delete(
//         `https://6374b4b508104a9c5f869829.mockapi.io/Data/mates/${id}`
//       );
//       setResults((prev) => {
//         return prev.filter((item) => item.id !== id);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };


// const drawData = () => {
  //   return filteredmate.map((result, i) => {
  //     return (
  //       <div className='cards' key={i}
  //       >
  //         {/* <Link to="/card">
  //           <img src={result.avatar} style={{ height: "60%", width: "100%" }} alt={result.id}
  //             onClick={() => {
  //               setChosenMate(result.id)
  //             }}
  //           />
  //         </Link> */}
  //         <h5>{result.name}</h5>
  //         <h5>{result.lastName}</h5>
  //         <h5>{result.city}</h5>
  //         <h5>{result.country}</h5>
  //         <h5>{result.smoker}</h5> 
  //         <h5>{result.launguges}</h5> 
  //         <h5>{result.kids}</h5> 
  //         <div class className="line-wrap"><p>{result.lastName}</p><div><p>Israel</p></div></div> 
  //         <button onClick={() => deleteData(result.id)}>Remove</button>
  //         <button onClick={() => deleteData(result.id)}>Connect</button>
  //       </div>
  //     )
  //   })
  // }