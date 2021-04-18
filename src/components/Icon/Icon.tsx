import React from 'react';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import {ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
  name: string;
  size: number;
}

export const Icon = ({style, name, size}: Props) => {
  return <VectorIcon name={name} size={size} style={style} />;
};
