import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");


function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
    else if (username === "" && room ==="") {
      alert("Please Enter User Name and RoomID");
 
    }
    else if (username ===""){
   alert("Please Enter User Name");

    }
    else if (room === "") {
      alert("Please Enter Room ID");

    }
  };
  const myfunction =()=> {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
 

  return (
    <div className="App">
      
     
      {!showChat ? (
        <div className="joinChatContainer">
          
          <h3 id="txt"> Welcome to <b id="txt1"> <b id="txt3"> F</b>uture<b id="txt3">E</b>nhancer</b> 
          <b id="txt2"> C</b>hat 
          <b id="txt2"> B</b>ox </h3>
          <input
            type="text"
            placeholder="Enter Name.."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID.."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
            

          />
          
          

          <div className="popup" onClick={myfunction}>Click me! To know How to Chat...
            <span className="popuptext" id="myPopup"> To Chat with your friends, you have to write the same room id that your friend has written  </span>
          </div>
           
      



          <button id="j-btn" onClick={joinRoom}>Join</button>
       
        </div>

      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      <audio src="/music.mp3" autoplay loop> this is Aud</audio>
    </div>
  );
}

export default App;
