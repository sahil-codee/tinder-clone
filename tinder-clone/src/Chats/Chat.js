import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import data from "../Data";

function Chat({name, message, timeStamp, profilePic}) {
  return (
    // <div className="chat">
    //   {data.map((person) => (
    //     <div>
    //       <Link to={`/chat/${person.name}`}>
    //         <Avatar className="chat__image" src={person.profilePic} />
    //         <div className="chat__details">
    //           <h2 className="chat__name">{person.name}</h2>
    //           <p className="chat__message">{person.message}</p>
    //         </div>
    //         <p className="chat__timestamp">{person.timeStamp}</p>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
          <h2 className="chat__name">{name}</h2>
          <p className="chat__message">{message}</p>
        </div>
        <p className="chat__timestamp">{timeStamp}</p>
      </div>
     </Link>
  );
}

export default Chat;
