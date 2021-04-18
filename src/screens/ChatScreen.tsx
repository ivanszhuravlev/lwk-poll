import React, {useCallback, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {IAppStack} from '../../App';
import {useDispatch, useSelector} from '../store/store';
import {selectChat} from '../store/stores/chats/chatsSelectors';
import {getChatsAction} from '../store/stores/chats/chatsActions';
import {MessagesList} from '../components/Chat/MessagesList';
import {ScreenContainer} from '../components/ScreenContainer/ScreenContainer';
import {Header} from '../components/Header/Header';
import {ControlBar} from '../components/Chat/ControlBar';
import {styled} from '../services/styled/styled';
import {Pic} from '../components/Image/Pic';

interface Props {
  navigation: StackNavigationProp<IAppStack, 'Chat'>;
  route: RouteProp<IAppStack, 'Chat'>;
}

export const ChatScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatsAction());
  }, [dispatch]);

  const chatId = 'c1';
  const chat = useSelector(state => selectChat(state, 'c1'));

  const goToPollCreation = useCallback(
    () => navigation.navigate('CreatePoll', {chatId}),
    [],
  );

  const renderChatButton = useCallback(() => {
    return (
      <ChatPic
        uri={
          'https://cdn.mos.cms.futurecdn.net/khRipjVa7SEL5ndKogPHjj-1200-80.jpg'
        }
      />
    );
  }, []);

  return (
    <ScreenContainer>
      <Header
        title={'Lowkey Squad'}
        subtitle={'1 member • 1 online'}
        renderRightButton={renderChatButton}
      />
      <MessagesList chat={chat} />
      <ControlBar onPoll={goToPollCreation} />
    </ScreenContainer>
  );
};

const ChatPic = styled(Pic)`
  width: 35px;
  height: 35px;
`;
