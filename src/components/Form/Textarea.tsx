import React from 'react';
import {styled} from '../../services/styled/styled';
import {TextInputProps} from 'react-native';

const StyledInput = styled.TextInput.attrs<TextInputProps>(({theme}) => ({
  placeholderTextColor: theme.colors.textGreyed,
  multiline: true,
  underlineColorAndroid: 'transparent',
  textAlignVertical: 'center',
}))`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.text}px;
  margin-top: -6px;
`;

const Container = styled.View`
  min-height: 50px;
  padding: ${({theme}) => theme.offset.medium}px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: ${({theme}) => theme.borderRadius.input}px;
`;

export const Textarea = ({style, ...props}: TextInputProps) => {
  return (
    <Container style={style}>
      <StyledInput {...props} />
    </Container>
  );
};
