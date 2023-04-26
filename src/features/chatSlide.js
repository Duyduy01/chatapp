import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatOpen: false,
  chats: [],
  chatsOpen: [],
};

const chatSlice = createSlice({
    name: "chat",
    initialState, 
    reducers: {
        changeChatState: (state) => {
            state.isChatOpen = true;
        },
        setChats: (state, action) => {
            state.chats = action.payload.chats;
        },

        setBoxChatOpen: (state, action) => {
            const chatBoxOpen = state.chats.filter((chat) => {
                chat._id = action.payload._id;
            })
            state.chatsOpen.push(chatBoxOpen)
        }
    }
});

//export action
export const { changeChatState } = chatSlice.actions;

export default chatSlice.reducer;

