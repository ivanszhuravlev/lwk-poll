import {styled} from '../../services/styled/styled';

const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSize.text}px;
`;
const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.textGreyed};
  font-size: ${({theme}) => theme.fontSize.small}px;
`;
const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${({theme}) => theme.offset.small}px;
`;
const Aside = styled.View`
  padding-left: ${({theme}) => theme.offset.medium}px;
  flex: 1;
`;

export const MessageStyles = {
  Text,
  Title,
  Container,
  Aside,
};
