 import React
// {useState,useEffect,useContext } 
from "react";
// import { UserContext } from "../App"
// import { Container, Col, Row } from "react-bootstrap";
import io from "socket.io-client";
// import '../Pages/Messages.css'

// const socket = io.connect('http://127.0.0.1:5000/');

function Messages() {
  return ( <div></div>

)}
export default Messages;

// const [chatUsers, setChatUsers] = useState([])
// const [chatMessage, setChatMessage] = useState({name: "", msg: "",room:""})
// const [msgList, setMsgList] = useState([])
// const [currentRoom, setCurrentRoom] = useState("General Chat")
//     useEffect(()=> {
//         socket.emit("userJoin", userData.user.name)
//     },[])

//     const { userData, setUserData } = useContext(UserContext)

//     socket.on("newMessage", newMessage => {
//         setMsgList([...msgList, {name: newMessage.name, msg: newMessage.msg}])
//       })

//     socket.on("userList", (userList) => {
//         setChatUsers(userList);
//         setChatMessage({name:socket.id,msg:chatMessage.msg})
//       })

//       const handleChange = (e) => {
//         setChatMessage({...chatMessage, [e.target.name]: e.target.value})
//       }

//       const newMessageSubmit = (e) => {
//         e.preventDefault()
//         const newMessage = {
//           name: chatMessage.name,
//           msg: chatMessage.msg,
//           room: currentRoom
//         }

//         console.log("Just Sent: ", newMessage)
//         socket.emit("newMessage", newMessage)

//         setChatMessage({
//             name: socket.id,
//             msg: ""
//           })
//         }

//         const enteringRoom = (e) => {
//           let oldRoom = currentRoom
//             let newRoom = e.target.textContent
//             setCurrentRoom(newRoom)
//             socket.emit("roomEntered", { oldRoom, newRoom })
//     setMsgList([])
//           }

//     return ( <Container>
//     <Row>
//       <Col xs={5} style={{ border: "1px solid black" }}>
//       <h6 onClick={enteringRoom} style={{ cursor: "pointer" }}>General Chat</h6>
//       <br/>
//       <p><b>Chat Rooms</b></p>
//           <ul style={{ listStyleType: "none" }}>
//             <li onClick={enteringRoom} style={{ cursor: "pointer" }}>Change Seat</li>
//             <li onClick={enteringRoom} style={{ cursor: "pointer" }}>Track Mate</li>
//             <li onClick={enteringRoom} style={{ cursor: "pointer" }}>Prayer with a Minyan</li>
//           </ul>
//         <p><b>Connected Sockets : </b></p>
//         <ul style={{ listStyleType:"none"}}>
//             {chatUsers.map((user)=>{
//                return (<li onClick={enteringRoom} style={{cursor:"pointer"}} key={user}>{user}</li>) 
//             })}
//         </ul>
//        </Col>
//        <Col style={{ border: "1px solid black"}}>
//         <p>Chat Messages:({currentRoom})</p>
//         <form onSubmit={newMessageSubmit}>
//             <input type="text" name="msg"  value={chatMessage.msg}
//               onChange={handleChange} required style={{ width: "80%" }} />
//             <input type="sumbit" name="Message!" />
//         </form>
//         <div id="chatMessages" style={{ border: "1px solid black"}}>Messages
//         Messages
//             <ul style={{ listStyle:"none" }}>
//               {msgList.map((msgList, index) => {
//                 return (
//                   <li key={index}>
//                     <b>{msgList.name}: </b>
//                     <i>
//                       <span style={{color: msgList.isPrivate ? "red" : "black"}}>
//                         {msgList.msg}
//                       </span></i>
//                   </li>
//                 )
//               })}
//             </ul>
//             </div>
//        </Col>
//        </Row>
//        </Container>
