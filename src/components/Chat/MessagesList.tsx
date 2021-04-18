import React from 'react';
import {IChat, IMessage} from '../../store/stores/chats/chatsStore';
import {FlatList, ListRenderItem} from 'react-native';
import {ChatStyles} from './ChatStyles';
import {useCallback} from 'react';
import {Message} from './Message';
import {MessagePoll} from './MessagePoll/MessagePoll';

interface Props {
  chat: IChat;
}

export const MessagesList = ({chat}: Props) => {
  const renderItem: ListRenderItem<IMessage> = useCallback(
    ({item}) =>
      item.type === 'text' ? (
        <Message
          text={item.text}
          title={item.user.name}
          pic={item.user.avatar}
        />
      ) : (
        <MessagePoll
          question={item.text}
          options={item.options}
          user={item.user}
        />
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
