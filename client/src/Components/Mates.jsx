import React, { useEffect, useState } from 'react'
import axios from "axios"
// import { Link } from "react-router-dom"
import "./Mates.css"

function Mates({ filter, setChosenMate, searchvalue }) {
  const [results, setResults] = useState([]);
  const [filteredmate, setFilteredMate] = useState([])
  // console.log(filter)
  useEffect(() => {
    async function getDataFromApi() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5000/passengers/"
        );
        console.log(data);

        setResults(data);

      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);

  useEffect(() => {
    const filtered = results.filter((mate) => {
      console.log('mate', mate.launguges);
      console.log('searchvalue', searchvalue);
      console.log('filter', filter);
      return mate[filter] === searchvalue
    }
    )
    setFilteredMate(filtered)
    console.log(filtered);
    // setFilteredMate(filtered)

  }, [results])

  const drawdinamics = () => {
    const onAddMate = (mateId) => {
      console.log(mateId);
    }
    //  console.log(filteredmate);
    return filteredmate.map((mate) => {
 
      return (
      <div> 
        <figure className="snip1376">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg" alt="sample17" />
      <figcaption>
        <h1>{`${mate.name} ${mate.lastName}`}</h1>
        <p><div className='cards' key={mate._id}>
          {/* <div className='fligthsupdatewrapper'> */}
            {/* <h1 className="flight-title">General Info</h1> */}
            <div className="filght-details">
              <div className="line-wrap"><p>City</p><div><p>{mate.city}</p></div></div>
              <div className="line-wrap"><p>Country</p><div><p>{mate.country}</p></div></div>
              <div className="line-wrap"><p>Smoker</p><div><p>{mate.smoker}</p></div></div>
              <div className="line-wrap"><p>Hobbies</p><div><p>{mate.hobbies}</p></div></div>
              {/* <div className="line-wrap"><p>Pets</p><div><p>{mate.pets}</p></div></div> */}
              <div className="line-wrap"><p>Launguge</p><div><p>{mate.launguges}</p></div></div>
              <div className="line-wrap"><p>Education</p><div><p>{mate.education}</p></div></div>
              <div className="line-wrap"><p>Occupation</p><div><p>{mate.occupation}</p></div></div>
              <button className= "message" onClick={() => onAddMate(mate._id)}>Send message</button> </div>
          </div>
        {/* </div>  */}
        </p>
        <div className="icons">
          <button >send message</button>
        </div>
      </figcaption>
    </figure>

     </div>  )
    })
  }
  return (
    <div>
      <div className='cardsContainer' style={{ marginTop: "100px" }}>{drawdinamics()}</div>
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


