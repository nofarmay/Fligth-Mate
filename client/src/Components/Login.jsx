import {useRef} from 'react'
import axios  from 'axios'
import "./Login.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login({loggedUser,setloggedUser}) {
const username=useRef()
const password=useRef()
  const postPassenger = async () => {
console.log("d");
  try{
 const {data} = await axios.post("http://127.0.0.1:5000/passengers/login",{username:username.current.value,password:password.current.value})
 console.log(data);
 setloggedUser(data._id)
  }catch (e){
console.log(e);
  }
}
    return (   <MDBContainer className='my-5'>
    <MDBCard>

      <MDBRow className='g-0 d-flex align-items-center'>

        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
        </MDBCol>

        <MDBCol md='8'>

          <MDBCardBody>

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' ref={username}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref={password}/>

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn onClick= {() => postPassenger()} className="mb-4 w-100">Sign in</MDBBtn>

          </MDBCardBody>

        </MDBCol>

      </MDBRow>

    </MDBCard>
  </MDBContainer>
);
}
export default Login;