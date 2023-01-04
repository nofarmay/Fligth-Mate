import "./App.css";
import React, {useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { Container } from 'react-bootstrap'
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import FindMate from "./Pages/FindMate";
import About from "./Pages/About";
import AddHome from "./Components/AddHome";
import Error from "./Pages/Error";
import Register from "./Components/Register";
import Cards from "./Components/Cards";
import Card from "./Components/Card";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Messages from "./Pages/Messages";
// import Feed from "./Pages/Feed";
import Fligths from "./Pages/Fligths";
import Login from "./Components/Login";
import Mates from "./Components/Mates";
// import Main from "./Components/Main";
// export const UserContext = createContext()
function App() {
  const [filter, setFilter] = useState("");
  const [chosenHouse, setChosenHouse] = useState("");
  const [chosenMate, setChosenMate] = useState("");
  const [searchvalue, setSearchvalue] = useState("");
  const [loggedUser, setloggedUser] = useState(null);
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined,
  // });
  return (
   
    <div style={{width:"100vw"}}>
   
       {/* <Main />  */}
      <NavBar loggedUser={loggedUser}setloggedUser={setloggedUser}/>
      <Routes>
        <Route
          path="/"
          element={<Register />}
        /> 
        <Route
        path="/findflight"
        element={<HomePage filter={filter} setFilter={setFilter} />}
      />
        <Route path="/About" element={<About />} />
        <Route path="/passengers" element={<AddHome />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Login" element={<Login loggedUser={loggedUser}setloggedUser={ setloggedUser} />} />
        <Route path="/Profile" element={<Profile loggedUser={loggedUser}  setloggedUser={ setloggedUser}/>} />
        <Route path="/Admin" element={<Admin />} />
        {/* <Route path="/Feed" element={<Feed />} /> */}
        {/* <Container>       */}
        <Route path="/Messages" element={<Messages />} />
        {/* </Container> */}
        <Route path="/Fligths" element={<Fligths />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Card" element={<Card chosenHouse={chosenHouse} />}/>
        <Route path="/FindMate" element={<FindMate filter={filter} setFilter={setFilter}setSearchvalue={setSearchvalue}/>} />
        <Route
          path="/Cards"
          element={<Cards filter={filter} setChosenHouse={setChosenHouse} loggedUser={loggedUser}setloggedUser={setloggedUser}  />}
        />
        <Route
          path="/Mates"
          element={<Mates filter={filter} setChosenMate={setChosenMate} searchvalue={searchvalue}/>}
        />
      </Routes>
    
      </div>
      

  );
}
export default App;