import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {IAppStack} from '../../App';

interface Props {
  navigation: StackNavigationProp<IAppStack, 'Chat'>;
  route: RouteProp<IAppStack, 'Chat'>;
}

export const ChatScreen = ({route}: Props) => {
  return null;
};
