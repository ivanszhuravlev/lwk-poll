import {styled} from '../../services/styled/styled';
import {Icon} from '../Icon/Icon';
import {Input} from '../Form/Input';

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  padding-horizontal: ${({theme}) => theme.offset.big}px;
  align-items: center;
  padding-top: ${({theme}) => theme.offset.tiny}px;
  background-color: ${({theme}) => theme.colors.main2};
`;

const CreatePollButton = styled.TouchableOpacity``;
const RecordButton = styled.TouchableOpacity``;

const IconStyled = styled(Icon)`
  color: ${({theme}) => theme.colors.text};
  font-size: 24px;
`;

const MessageInput = styled(Input)`
  margin-horizontal: ${({theme}) => theme.offset.smallest}px;
`;

export const ControlBarStyles = {
  Container,
  CreatePollButton,
  RecordButton,
  IconStyled,
  MessageInput,
};
