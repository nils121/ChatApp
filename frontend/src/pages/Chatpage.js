import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // fetchChats();
  }, []);

  const fetchChats = async () => {
    const { data } = await axios.get("/getData");
    console.log(data);
    setChats(data);
  };
  return (
    <div>
      {/* {chats.map((chat, index) => {
        return <div key={index}>{chat.chatName}</div>;
      })} */}
    </div>
  );
};

export default Chatpage;
