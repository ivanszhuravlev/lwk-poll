import {MessageStyles} from './MessageStyles';

interface Props {
  title: string;
  text: string;
  pic: string;
}

export const Message = ({title, text, pic}: Props) => {
  return (
    <MessageStyles.Container>
      <MessageStyles.Pic source={{uri: ''}} />
      <MessageStyles.Aside>
        <MessageStyles.Title>{title}</MessageStyles.Title>
        <MessageStyles.Text>{text}</MessageStyles.Text>
      </MessageStyles.Aside>
    </MessageStyles.Container>
  );
};
