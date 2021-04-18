import React from 'react';
import {ViewProps, ViewStyle} from 'react-native';
import {styled} from '../../services/styled/styled';

interface Props extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ScreenContainer = ({children, style}: Props) => {
  return <Container style={style}>{children}</Container>;
};

const Container = styled.View`
  flex: 1;
`;
