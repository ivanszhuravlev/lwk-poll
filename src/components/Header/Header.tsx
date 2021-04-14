import React from 'react';
import {HeaderStyles} from './Header.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type renderProp = () => React.ReactNode;

interface Props {
  renderCenter?: renderProp;
  renderRightButton?: renderProp;
  renderLeftButton?: renderProp;
  isSafe?: boolean;
}

export const Header = ({
  renderCenter,
  renderRightButton,
  renderLeftButton,
  isSafe,
}: Props) => {
  const safeAreaInsets = useSafeAreaInsets();
  const dynamicStyle = {
    paddingTop: isSafe ? safeAreaInsets.top : 0,
  };

  return (
    <HeaderStyles.Container style={dynamicStyle}>
      <HeaderStyles.Content>
        {renderCenter && renderCenter()}
        {renderLeftButton && renderLeftButton()}
        {renderRightButton && renderRightButton()}
      </HeaderStyles.Content>
    </HeaderStyles.Container>
  );
};
