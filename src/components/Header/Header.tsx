import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderStyles} from './Header.styles';
import {ViewStyle} from 'react-native';
import {HeaderContent} from './HeaderContent';

type renderProp = () => React.ReactNode;

interface Props {
  renderRightButton?: renderProp;
  isSafe?: boolean;
  title: string;
  subtitle?: string;
  style?: ViewStyle;
}

export const Header = ({
  renderRightButton,
  isSafe,
  title,
  subtitle,
  style,
}: Props) => {
  const safeAreaInsets = useSafeAreaInsets();
  const dynamicStyle = {
    paddingTop: isSafe ? safeAreaInsets.top : 0,
  };

  return (
    <HeaderStyles.Wrapper style={dynamicStyle}>
      <HeaderStyles.Container style={style}>
        <HeaderContent
          renderRightButton={renderRightButton}
          title={title}
          subtitle={subtitle}
        />
      </HeaderStyles.Container>
    </HeaderStyles.Wrapper>
  );
};
