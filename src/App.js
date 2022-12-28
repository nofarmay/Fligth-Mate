import "./App.css";
import React, {useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import Feed from "./Pages/Feed";
import Fligths from "./Pages/Fligths";
import Login from "./Components/Login";
import Mates from "./Components/Mates";
// import axios from "axios";
// import { Link } from "react-router-dom";

import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
// import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './Components';
const apiKey = "gcq3bz8pg299";

const client = StreamChat.getInstance(apiKey);

function App() {
  const [filter, setFilter] = useState("");
  const [chosenHouse, setChosenHouse] = useState("");
  const [chosenMate, setChosenMate] = useState("");
  const [searchvalue, setSearchvalue] = useState("");
  return (
    <div>
         <div className="app__wrapper">
    <Chat client={client} theme="team light">
        <ChannelListContainer 
            // isCreating={isCreating}
            // setIsCreating={setIsCreating}
            // setCreateType={setCreateType}
            // setIsEditing={setIsEditing}
        />
        <ChannelContainer 
            // isCreating={isCreating}
            // setIsCreating={setIsCreating}
            // isEditing={isEditing}
            // setIsEditing={setIsEditing}
            // createType={createType}
        />
    </Chat></div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<HomePage filter={filter} setFilter={setFilter} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/passengers" element={<AddHome />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Fligths" element={<Fligths />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Card" element={<Card chosenHouse={chosenHouse} />} />
        <Route path="/FindMate" element={<FindMate filter={filter} setFilter={setFilter}setSearchvalue={setSearchvalue}/>} />
        <Route
          path="/Cards"
          element={<Cards filter={filter} setChosenHouse={setChosenHouse} />}
        />
        <Route
          path="/Mates"
          element={<Mates filter={filter} setChosenMate={setChosenMate} searchvalue={searchvalue} />}
        />
      </Routes>
    </div>
  );
}
export default App;