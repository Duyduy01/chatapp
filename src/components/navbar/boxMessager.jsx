import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
// import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
import ChatModal from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { changeChatState, setChats } from "../../features/chatSlide";
import axios from "axios";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [openBoxMessage, setOpenBoxMessage] = React.useState(false);
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // tao ham fetch data chat ve
  const handleChat = async () => {
    const response = await axios(`api link`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const chats = await response.data;
    dispatch(setChats({ chats: chats }));
  };

  const handleClose = () => {
    setAnchorEl(null);
    //chua co api
    // handleChat()
  };
  //   const [isChatOpen, setIsChatOpen] = React.useState(false);

  const handleOpenChat = () => {
    // setIsChatOpen(true);
    dispatch(changeChatState());
    dispatch(setBoxChatOpen(_id));
    setAnchorEl(null);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Messages">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: -1 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <ChatBubbleOutlineIcon sx={{ width: 25, height: 25 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              // width: 32,
              // height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {chats.map((chat) => {
          <MenuItem
            onClick={handleOpenChat}
            sx={{
              width: 343,
              height: 50,
            }}
          >
            {/* component ve chat */}
            <Avatar /> Profile
          </MenuItem>;
        })}
      </Menu>
      {/* {isChatOpen && (
        <Box>
          <ChatModal isOpen={isChatOpen} onRequestClose={handleCloseChat} />
        </Box>
      )} */}
    </React.Fragment>
  );
}
