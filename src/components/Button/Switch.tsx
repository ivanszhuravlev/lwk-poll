import React, {useEffect, useState} from 'react';
import {useTheme} from '../../services/styled/styled';
import {Switch as SwitchNative} from 'react-native';

interface Props {
  onToggle: (isOn: boolean) => void;
}

export const Switch = ({onToggle}: Props) => {
  const theme = useTheme();
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    onToggle(isOn);
  }, [isOn]);

  return (
    <SwitchNative
      onValueChange={setIsOn}
      value={isOn}
      thumbColor={isOn ? theme.colors.white : theme.colors.textGreyed}
      trackColor={{
        true: theme.colors.blueLight,
        false: theme.colors.main2,
      }}
      ios_backgroundColor={theme.colors.main2}
    />
  );
};
