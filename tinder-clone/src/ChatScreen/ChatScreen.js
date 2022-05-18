// import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./ChatScreen.css";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [inputData, setInputData] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sofia",
      image:
        "https://www.telegraph.co.uk/content/dam/tv/2016/09/14/sofia-vergara_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RTgjU7QtstFrD21mzXAYo54.jpg",
      message: "What's up ?",
      messageClient: "Cool!",
    },
    {
      id: 2,
      name: "Sofia",
      image:
        "https://www.telegraph.co.uk/content/dam/tv/2016/09/14/sofia-vergara_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RTgjU7QtstFrD21mzXAYo54.jpg",
      message: "How it's going!",
      messageClient: "Hey, How are you Sofia!",
    },
    {
      id: "1996",
      name: "Martin",
      message: "Hello What's Up?",
      timeStamp: "40 minutes ago",
      image:
        "https://geo-media.beatport.com/image_size/590x404/f8117f84-40d6-4403-bb2d-5bdf304dd12e.jpg",
      messageClient: "Hey, How are you Martin!",
    },
  ]);

  function handleSent(e) {
    setMessages([...messages, { messageClient: inputData }]);
    setInputData("");
    e.preventDefault();
  }

  const { person } = useParams();

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        {`YOU MATCHED WITH ${person.toUpperCase()} ON 10/05/22`}
      </p>

      {messages
        .filter((message) => message.name === person)
        .map((message) => (
          <div key={message.id}>
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.messageClient}</p>
            </div>
          </div>
        ))}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message...."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          onClick={handleSent}
          type="submit"
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
