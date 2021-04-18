import {styled} from '../../services/styled/styled';
import {Textarea} from '../Form/Textarea';
import {Button} from '../Button/Button';

const Container = styled.ScrollView`
  padding-horizontal: ${({theme}) => theme.offset.big}px;
  padding-vertical: ${({theme}) => theme.offset.medium}px;
`;
const Block = styled.View`
  height: auto;
  margin-bottom: ${({theme}) => theme.offset.huge}px;
`;

const BlockOptions = styled(Block)`
  margin-bottom: ${({theme}) => theme.offset.huge + theme.offset.medium}px;
`;

const InputQuestion = styled(Textarea)`
  background-color: ${({theme}) => theme.colors.main1};
  border-radius: ${({theme}) => theme.borderRadius.interactable}px;
`;

const ButtonAdd = styled(Button)``;

export const FormCreatePollStyles = {
  Container,
  Block,
  InputQuestion,
  ButtonAdd,
  BlockOptions,
};
