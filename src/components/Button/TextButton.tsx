import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {styled} from '../../services/styled/styled';

interface Props {
  label: string;
  onPress: (e: GestureResponderEvent) => void;
}

const hitSlop = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10,
};

export const TextButton = ({label, onPress}: Props) => {
  return (
    <Button onPress={onPress} hitSlop={hitSlop}>
      <Label>{label}</Label>
    </Button>
  );
};

const Button = styled.TouchableOpacity``;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.textGreyed};
  font-size: ${({theme}) => theme.fontSize.medium}px;
  font-family: ${({theme}) => theme.fonts.medium};
`;
