import {styled} from '../../services/styled/styled';
import {Icon} from '../Icon/Icon';

const Wrapper = styled.View`
  height: 88px;
  justify-content: flex-end;
`;

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.main1};
  flex: 1;
  justify-content: flex-end;
`;

const Content = styled.View`
  flex-direction: row;
  padding-left: ${({theme}) => theme.offset.huge}px;
  padding-right: ${({theme}) => theme.offset.big}px;
  align-items: center;
  padding-bottom: 4px;
`;

const BackButton = styled.TouchableOpacity``;

const BackIcon = styled(Icon)`
  color: ${({theme}) => theme.colors.text};
  font-size: 24px;
`;

const HeadingContent = styled.View`
  flex: 3;
  align-items: center;
`;

const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.fontSize.title}px;
  color: ${({theme}) => theme.colors.text};
`;
const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.small}px;
  color: ${({theme}) => theme.colors.textGreyed};
`;

const Left = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const Right = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const HeaderStyles = {
  Wrapper,
  Container,
  BackButton,
  BackIcon,
  HeadingContent,
  Title,
  Subtitle,
  Content,
  Left,
  Right,
};
