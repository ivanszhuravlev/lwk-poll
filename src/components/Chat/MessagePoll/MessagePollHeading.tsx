import React from 'react';
import {styled} from '../../../services/styled/styled';
import {IUser} from '../../../store/stores/chats/chatsStore';
import {Pic} from '../../Image/Pic';

interface Props {
  user: IUser;
  isPublic?: boolean;
}

export const MessagePollHeading = ({user, isPublic}: Props) => {
  const pollType = isPublic ? 'Public' : 'Anonymous';

  return (
    <Heading>
      <PicStyled uri={user.avatar} />
      <HeadingContent>
        <TypeOfPoll>{pollType} poll</TypeOfPoll>
        <Author>{user.name}</Author>
      </HeadingContent>
      <VotesContainer>
        <VotesCount>0</VotesCount>
        <VotesLabel>votes</VotesLabel>
      </VotesContainer>
    </Heading>
  );
};

const HeadingContent = styled.View`
  flex: 1;
`;

const Heading = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: ${({theme}) => theme.offset.small}px;
`;

const TypeOfPoll = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.tiny}px;
  color: ${({theme}) => theme.colors.text};
`;
const Author = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.fontSize.small}px;
  color: ${({theme}) => theme.colors.text};
  margin-top: 2px;
`;

const VotesContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: ${({theme}) => theme.borderRadius.max}px;
  background-color: ${({theme}) => theme.colors.purple};
`;

const PicStyled = styled(Pic)`
  width: 36px;
  height: 36px;
  margin-right: ${({theme}) => theme.offset.smallest}px;
`;

const VotesCount = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.fontSize.title}px;
  color: ${({theme}) => theme.colors.text};
`;
const VotesLabel = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.tiny}px;
  color: ${({theme}) => theme.colors.text};
`;
