import React from 'react';
import {styled} from '../../services/styled/styled';

interface Props {
  label: string;
  current: number;
  max: number;
}

export const LabelCounter = ({label, current, max}: Props) => {
  const counter = `${current}/${max}`;
  return (
    <Container>
      <Label>{label}</Label>
      <Counter>{counter}</Counter>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.offset.smallest}px;
`;

const Label = styled.Text`
  color: ${({theme}) => theme.colors.textGreyed};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSize.small}px;
`;

const Counter = styled.Text`
  color: ${({theme}) => theme.colors.textGreyed};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.small}px;
`;
