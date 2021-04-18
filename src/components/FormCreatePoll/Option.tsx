import React, {useEffect, useState} from 'react';
import {Icon} from '../Icon/Icon';
import {styled} from '../../services/styled/styled';
import {Input} from '../Form/Input';

interface Props {
  onRemove: (id: number) => void;
  onChange: (id: number, text: string) => void;
  id: number;
}

export const Option = ({onRemove, onChange, id}: Props) => {
  const [value, setValue] = useState('');

  const onChangeText = (text: string) => setValue(text);
  const handleRemove = () => onRemove(id);

  useEffect(() => {
    onChange(id, value);
  }, [value]);

  return (
    <Container>
      <InputStyled onChangeText={onChangeText} value={value} />
      <CloseButton onPress={handleRemove}>
        <IconStyled name={'close'} size={20} />
      </CloseButton>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  border-radius: ${({theme}) => theme.borderRadius.block}px;
  align-items: stretch;
  margin-bottom: ${({theme}) => theme.offset.tiny}px;
`;

const InputStyled = styled(Input)`
  padding: ${({theme}) => theme.offset.medium}px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.text}px;
  color: ${({theme}) => theme.colors.text};

  border-radius: 0;
  border-top-left-radius: ${({theme}) => theme.borderRadius.block}px;
  border-bottom-left-radius: ${({theme}) => theme.borderRadius.block}px;

  background-color: ${({theme}) => theme.colors.main1};
`;

const CloseButton = styled.TouchableOpacity`
  width: 50px;
  background-color: ${({theme}) => theme.colors.blueLightAlpha};
  border-top-right-radius: ${({theme}) => theme.borderRadius.block}px;
  border-bottom-right-radius: ${({theme}) => theme.borderRadius.block}px;
  align-items: center;
  justify-content: center;
`;

const IconStyled = styled(Icon)`
  color: ${({theme}) => theme.colors.text};
`;
