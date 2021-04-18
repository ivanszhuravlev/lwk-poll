import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IChat {
  id: string;
  name: string;
  members: number;
  membersOnline: number;
  messages: IMessage[];
}

interface IChatCollection {
  [key: string]: IChat;
}

interface IChatsState {
  chats: IChatCollection;
}

const initialState: IChatsState = {
  chats: {},
};

export const ChatsStore = createSlice({
  name: 'ChatsStore',
  initialState,
  reducers: {
    setChats: (state, {payload}: PayloadAction<IChat[]>) => {
      state.chats = payload.reduce(
        (acc, chat) => ({...acc, [chat.id]: chat}),
        {} as IChatCollection,
      );
    },
    addMessage: (
      state,
      {payload}: PayloadAction<{chatId: string; message: IMessage}>,
    ) => {
      state.chats[payload.chatId].messages.push(payload.message);
    },
  },
});

export const {setChats, addMessage} = ChatsStore.actions;

export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export interface IMessage {
  id: string;
  text: string;
  type: 'text' | 'poll';
  user: IUser;
  options?: {
    id: number;
    text: string;
  }[];
}
