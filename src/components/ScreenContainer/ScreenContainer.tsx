import React from 'react';
import {ViewProps} from 'react-native';
import {styled} from '../../services/styled/styled';

interface Props extends ViewProps {
  children: React.ReactNode;
}

export const ScreenContainer = ({children}: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  flex: 1;
`;
