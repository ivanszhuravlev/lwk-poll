import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {IAppStack} from '../../App';

interface Props {
  navigation: StackNavigationProp<IAppStack, 'CreatePoll'>;
  route: RouteProp<IAppStack, 'CreatePoll'>;
}

export const CreatePollScreen = ({route}: Props) => {
  return null;
};
