import {ThunkAction} from '../../store';
import {mockChats} from '../../../mocks/chats';
import {setChats} from './chatsStore';

export const getChatsAction = (): ThunkAction<void> => dispatch => {
  // let's pretend there is something asynchronous :)
  dispatch(setChats(mockChats));
};
