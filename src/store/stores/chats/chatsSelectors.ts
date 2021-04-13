import {RootStore} from '../../store';

export const selectChat = (state: RootStore, id: string) =>
  state.chatsStore.chats[id];
