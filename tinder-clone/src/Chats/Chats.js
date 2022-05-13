import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Martin"
        message="Hello What's Up?"
        timeStamp="40 minutes ago"
        profilePic="https://geo-media.beatport.com/image_size/590x404/f8117f84-40d6-4403-bb2d-5bdf304dd12e.jpg"
      />
      <Chat
        name="Sofia"
        message="Hello What's Up?"
        timeStamp="30 minutes ago"
        profilePic="https://www.telegraph.co.uk/content/dam/tv/2016/09/14/sofia-vergara_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RTgjU7QtstFrD21mzXAYo54.jpg"
      />
      <Chat
        name="Adam"
        message="Hello What's Up?"
        timeStamp="10 minutes ago"
        profilePic="https://pbs.twimg.com/media/EF-H0FhU8AIlnV7.jpg"
      />
      <Chat
        name="Dakota"
        message="Hello What's Up?"
        timeStamp="50 minutes ago"
        profilePic="https://www.cheatsheet.com/wp-content/uploads/2020/05/Dakota-Johnson-attends-the-2018-Venice-Film-Festival.jpg"
      />
    </div>
  );
}

export default Chats;
