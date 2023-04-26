import Modal from "react-modal";
import React, { useState } from "react";
import Box from "@mui/material/Box";

function ChatModal(props) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Hàm xử lý khi người dùng gửi tin nhắn
  };

  return (
    <Box
      isOpen={props.isOpen}
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
    </Box>
  );
}

export default ChatModal;