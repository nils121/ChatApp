import React, { useEffect } from "react";
import axios from "axios";

const Chatpage = () => {
  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const data = await axios.get("/getData");
    console.log(data);
  };
  return <div></div>;
};

export default Chatpage;
