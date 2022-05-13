import { Avatar, Link } from "@mui/material";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Sofia",
      image:
        "https://www.telegraph.co.uk/content/dam/tv/2016/09/14/sofia-vergara_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RTgjU7QtstFrD21mzXAYo54.jpg",
      message: "What's up ?",
    },
    // {
    //   name: "Sofia",
    //   image:
    //     "https://www.telegraph.co.uk/content/dam/tv/2016/09/14/sofia-vergara_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RTgjU7QtstFrD21mzXAYo54.jpg",
    //   message: "How it's going!",
    // },
    {
      message: "Hey, How are you Sofia!",
    },
    // {
    //     name: "Martin",
    //     image:
    //       "https://geo-media.beatport.com/image_size/590x404/f8117f84-40d6-4403-bb2d-5bdf304dd12e.jpg",
    //     message: "What's up ?",
    //   },
    //   {
    //     name: "Martin",
    //     image:
    //       "https://geo-media.beatport.com/image_size/590x404/f8117f84-40d6-4403-bb2d-5bdf304dd12e.jpg",
    //     message: "How it's going!",
    //   },
    //   {
    //     message: "Hey, How are you Martin!",
    //   },
  ]);
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH SOFIA ON 10/05/22
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            {/* <h3>{message.name}</h3> */}
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
        <form className="chatScreen__input">
          <input
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message...."
          />
          <button className="chatScreen__inputButton">Send</button>
        </form>
    </div>
  );
}

export default ChatScreen;
