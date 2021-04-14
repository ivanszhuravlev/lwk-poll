import React from 'react';
import {IChat, IMessage} from '../../store/stores/chats/chatsStore';
import {FlatList, ListRenderItem} from 'react-native';
import {ChatStyles} from './ChatStyles';
import {useCallback} from 'react';
import {Message} from './Message';

interface Props {
  chat: IChat;
}

export const MessagesList = ({chat}: Props) => {
  const renderItem: ListRenderItem<IMessage> = useCallback(
    ({item}) => (
      <Message text={item.text} title={item.user.name} pic={item.user.avatar} />
    ),
    [],
  );

  return (
    <ChatStyles.Screen>
      <FlatList
        data={chat?.messages || []}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ChatStyles.containerStyle}
      />
    </ChatStyles.Screen>
  );
};
