// import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./ChatScreen.css";
import data from "../Data";
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
      message : "What's up ?",
    },
    {
      id: 2,
      name: "Sofia",
      image:
        "https://www.telegraph.co.uk/content/dam/tv/2016/09/14/sofia-vergara_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RTgjU7QtstFrD21mzXAYo54.jpg",
      message: "How it's going!",
      messageClient: "Hey, How are you Sofia!",

    },

  ]);

  function handleSent(e) {
    setMessages([...messages, { message: inputData }]);
    setInputData("");
    e.preventDefault();
  }

  const { person } = useParams();

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        {`YOU MATCHED WITH ${person.toUpperCase()} ON 10/05/22`}
      </p>
      {/* {data
        .filter((item) => item.name === person)
        .map((item, index) => (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={item.name}
              src={`${item.profilePic}`}
            />
            <p className="chatScreen__text">{item.message}</p>
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{item.message}</p>
            </div>
          </div>

        ))} */}

      {messages
        .filter((message) => message.name === person)
        .map((message) => (
          // message.name ? (
            <>
            <div key={message.id} className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
            <br />
            {/* // ) : ( */}
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.messageClient}</p>
            </div>
            </>
            // )
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
