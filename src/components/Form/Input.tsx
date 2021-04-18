import {styled} from '../../services/styled/styled';
import {TextInputProps} from 'react-native';

export const Input = styled.TextInput.attrs<TextInputProps>(({theme}) => ({
  placeholderTextColor: theme.colors.textGreyed,
  underlineColorAndroid: 'transparent',
  textAlignVertical: 'center',
}))`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.text};
  border-radius: ${({theme}) => theme.borderRadius.input}px;
  padding-horizontal: ${({theme}) => theme.offset.medium}px;
  padding-vertical: ${({theme}) => theme.offset.tiniest}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
