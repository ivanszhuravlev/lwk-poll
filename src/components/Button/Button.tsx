import React from 'react';
import {ViewStyle} from 'react-native';
import {styled} from '../../services/styled/styled';

interface Props {
  label: string;
  style?: ViewStyle;
  onPress: () => void;
}

export const Button = ({label, style, onPress}: Props) => {
  return (
    <Touchable onPress={onPress} style={style}>
      <Label>{label}</Label>
    </Touchable>
  );
};

const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.text}px;
  color: ${({theme}) => theme.colors.blueLight};
`;

const Touchable = styled.TouchableOpacity`
  padding-horizontal: ${({theme}) => theme.offset.big}px;
  padding-vertical: ${({theme}) => theme.offset.medium}px;
  border-radius: ${({theme}) => theme.borderRadius.interactable}px;
  background-color: ${({theme}) => theme.colors.main1};
`;
