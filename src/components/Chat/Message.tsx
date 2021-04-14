import React from 'react';
import {MessageStyles} from './Message.styles';
import {Pic} from '../Image/Pic';

interface Props {
  title: string;
  text: string;
  pic: string;
}

export const Message = ({title, text, pic}: Props) => {
  return (
    <MessageStyles.Container>
      <Pic uri={pic} />
      <MessageStyles.Aside>
        <MessageStyles.Title>{title}</MessageStyles.Title>
        <MessageStyles.Text>{text}</MessageStyles.Text>
      </MessageStyles.Aside>
    </MessageStyles.Container>
  );
};
