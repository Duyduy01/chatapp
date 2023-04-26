import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Chats = () => {
  const chats = useSelector((state) => state.chat.chatsOpen);
  return (
    <Box>
      {chats.map((chat) => {
        <Box
          //   isOpen={props.isOpen}
          sx={{
            bottom: "0px",
            right: "10px",
            backgroundColor: "darkgray",
            zIndex: 30,
            position: "fixed",
            width: "343px",
            height: "550px",
            borderRadius: "10px",
          }}
        >
          <button onClick={props.onRequestClose}>Đóng</button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Gửi</button>
        </Box>;
      })}
    </Box>
  );
};

export default Chats;
