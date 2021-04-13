import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {IAppStack} from '../../App';
import {useSelector} from '../store/store';
import {selectChat} from '../store/stores/chats/chatsSelectors';

interface Props {
  navigation: StackNavigationProp<IAppStack, 'Chat'>;
  route: RouteProp<IAppStack, 'Chat'>;
}

export const ChatScreen = ({route}: Props) => {
  const chat = useSelector(state => selectChat(state, 'c1'));
  return <Chat chat={chat} />;
};
