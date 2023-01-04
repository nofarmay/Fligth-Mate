
import React, {useRef, useState} from "react";
import axios from "axios";
import "./Register.css"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow,
    MDBCol,
  }
  from 'mdb-react-ui-kit';
function Register() { 
  // const [name, setName] = useState("");
const username=useRef()
const password=useRef()
// const [lastName, setlastName] = useState("");
// const [country, setCountry] = useState("");
// const [launguges, setLaunguges] = useState("");
// const [city, setCity] = useState("");
// const [occupation, setOccupation] = useState("");
// const [education, setEducation] = useState("");
// const navigate = useNavigate();

const postPassenger = async () => {

  try{

    await axios.post("http://127.0.0.1:5000/passengers/register",{username:username.current.value,password:password.current.value})
  }catch (e){
console.log(e);
  }
}
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post(
//       "http://127.0.0.1:5000/passengers/",
//       {
//         name,
//         lastName,
//         city,
//         country,
//         launguges,
//         occupation,
//         education
//       }
//     );
//     setName("")
//     setlastName("")
//     setCountry("")
//     setLaunguges("")
//     setCity("")
//     setOccupation("")
//     setEducation("")
//      console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };
 return(<div> <MDBContainer fluid className='my-5'>

 <MDBRow className='g-0 align-items-center'>
   <MDBCol col='6'>
     <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
       <MDBCardBody className='p-5 shadow-5 text-center'>

         <h2 className="fw-bold mb-5">Sign up now</h2>

         <MDBInput className='mb-4' label='Email' id='form3' type='email' ref={username}/>
         <MDBInput className='mb-4' label='Password' id='form4' type='password' ref={password}/>
         <MDBBtn onClick={() => postPassenger()} className='w-100 mb-4' size='md'>sign up</MDBBtn>
       </MDBCardBody>
     </MDBCard>
   </MDBCol>

   <MDBCol col='6'>
     <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
       alt="" />
   </MDBCol>

 </MDBRow>

</MDBContainer>
{/* profile datails */}
{/* <div className="add-home">
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
    </div> */}
    </div>)
   }
   export default Register;
   