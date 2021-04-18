import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HeaderStyles} from './Header.styles';
import {ViewStyle} from 'react-native';

type renderProp = () => React.ReactNode;

interface Props {
  renderRightButton?: renderProp;
  title: string;
  subtitle?: string;
  style?: ViewStyle;
}

export const HeaderContent = ({
  renderRightButton,
  title,
  subtitle,
  style,
}: Props) => {
  const navigation = useNavigation();

  const onBackPress = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <HeaderStyles.Content style={style}>
      <HeaderStyles.BackButton onPress={onBackPress}>
        <HeaderStyles.BackIcon name={'close'} size={18} />
      </HeaderStyles.BackButton>
      <HeaderStyles.HeadingContent>
        <HeaderStyles.Title>{title}</HeaderStyles.Title>
        {subtitle ? (
          <HeaderStyles.Subtitle>{subtitle}</HeaderStyles.Subtitle>
        ) : null}
      </HeaderStyles.HeadingContent>
      {renderRightButton && renderRightButton()}
    </HeaderStyles.Content>
  );
};
