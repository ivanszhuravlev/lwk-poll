import React from 'react';
import {ControlBarStyles} from './ControlBar.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  onPoll: () => void;
}

export const ControlBar = ({onPoll}: Props) => {
  const insets = useSafeAreaInsets();

  const dynamicStyle = {
    paddingBottom: insets.bottom + 30,
  };

  return (
    <ControlBarStyles.Container style={dynamicStyle}>
      <ControlBarStyles.CreatePollButton onPress={onPoll}>
        <ControlBarStyles.IconStyled name={'dashboard'} size={24} />
      </ControlBarStyles.CreatePollButton>
      <ControlBarStyles.MessageInput />
      <ControlBarStyles.RecordButton>
        <ControlBarStyles.IconStyled name={'radio-button-checked'} size={24} />
      </ControlBarStyles.RecordButton>
    </ControlBarStyles.Container>
  );
};
