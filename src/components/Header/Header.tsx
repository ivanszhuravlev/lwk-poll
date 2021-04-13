import {HeaderStyles} from './HeaderStyles';

type renderProp = () => React.ReactNode;

interface Props {
  renderCenter?: renderProp;
  renderRightButton?: renderProp;
  renderLeftButton?: renderProp;
}

export const Header = ({
  renderCenter,
  renderRightButton,
  renderLeftButton,
}: Props) => {
  return (
    <HeaderStyles.Container>
      {renderCenter && renderCenter()}
      {renderLeftButton && renderLeftButton()}
      {renderRightButton && renderRightButton()}
    </HeaderStyles.Container>
  );
};
