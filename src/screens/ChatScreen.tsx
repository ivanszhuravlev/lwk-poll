import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {IAppStack} from '../../App';
import {useDispatch, useSelector} from '../store/store';
import {selectChat} from '../store/stores/chats/chatsSelectors';
import {getChatsAction} from '../store/stores/chats/chatsActions';
import {MessagesList} from '../components/Chat/MessagesList';
import {ScreenContainer} from '../components/ScreenContainer/ScreenContainer';
import {Header} from '../components/Header/Header';

interface Props {
  navigation: StackNavigationProp<IAppStack, 'Chat'>;
  route: RouteProp<IAppStack, 'Chat'>;
}

export const ChatScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatsAction());
  }, [dispatch]);

  const chat = useSelector(state => selectChat(state, 'c1'));

  return (
    <ScreenContainer>
      <Header />
      <MessagesList chat={chat} />
    </ScreenContainer>
  );
};
