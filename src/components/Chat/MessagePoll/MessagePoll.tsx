import React, {useMemo} from 'react';
import {styled, useTheme} from '../../../services/styled/styled';
import {IUser} from '../../../store/stores/chats/chatsStore';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {MessagePollHeading} from './MessagePollHeading';

interface Props {
  question: string;
  options: {id: number; text: string}[];
  user: IUser;
  isPublic?: boolean;
}

export const MessagePoll = ({question, options, user, isPublic}: Props) => {
  const theme = useTheme();

  const gradientConfig: LinearGradientProps = useMemo(
    () => ({
      useAngle: true,
      angle: 134,
      angleCenter: {x: 0.5, y: 0.5},
      locations: [0, 0.2, 0.7, 1],
      colors: [
        theme.colors.purpleGradient,
        theme.colors.purpleSoftGradient,
        theme.colors.purpleLightGradient,
        theme.colors.blueGreyGradient,
      ],
    }),
    [
      theme.colors.purpleGradient,
      theme.colors.purpleSoftGradient,
      theme.colors.purpleLightGradient,
      theme.colors.blueGreyGradient,
    ],
  );

  const renderOption = (option: {id: number; text: string}) => {
    return (
      <Option>
        <OptionLabel>{option.text}</OptionLabel>
      </Option>
    );
  };

  return (
    <Container>
      <GradientBackground {...gradientConfig}>
        <MessagePollHeading user={user} isPublic={isPublic} />
        <PollTitle numberOfLines={3}>{question}</PollTitle>
        {options.map(renderOption)}
      </GradientBackground>
    </Container>
  );
};

const Container = styled.View``;

const GradientBackground = styled(LinearGradient)`
  padding-horizontal: ${({theme}) => theme.offset.big}px;
  padding-bottom: ${({theme}) => theme.offset.big}px;
  border-radius: ${({theme}) => theme.borderRadius.group}px;
`;

const PollTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSize.text}px;
  color: ${({theme}) => theme.colors.text};
`;

const Option = styled.TouchableOpacity`
  border-radius: ${({theme}) => theme.borderRadius.block}px;
  padding-horizontal: ${({theme}) => theme.offset.medium}px;
  padding-vertical: ${({theme}) => theme.offset.small}px;
  margin-top: ${({theme}) => theme.offset.tiny}px;
  background-color: ${({theme}) => theme.colors.blueLightTransparent2};
`;
const OptionLabel = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.small}px;
  color: ${({theme}) => theme.colors.text};
`;
