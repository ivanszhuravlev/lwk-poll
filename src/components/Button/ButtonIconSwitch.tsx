import React, {useCallback, useEffect, useState} from 'react';
import {Icon} from '../Icon/Icon';
import {Switch} from './Switch';
import {styled} from '../../services/styled/styled';

interface Props {
  iconName: string;
  label: string;
  onToggle: (isOn: boolean) => void;
}

export const ButtonIconSwitch = ({iconName, label, onToggle}: Props) => {
  return (
    <Container>
      <Aside>
        <IconStyled name={iconName} size={24} />
        <Label>{label}</Label>
      </Aside>
      <Switch onToggle={onToggle} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Aside = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const IconStyled = styled(Icon)`
  color: ${({theme}) => theme.colors.text};
  margin-right: ${({theme}) => theme.offset.medium}px;
`;

const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSize.medium}px;
  color: ${({theme}) => theme.colors.text};
`;
