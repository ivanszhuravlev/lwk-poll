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
  top: 0;
  left: 0;
  flex: 1;
  align-items: center;
`;

const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.fontSize.title};
  color: ${({theme}) => theme.colors.text};
`;
const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSize.small};
  color: ${({theme}) => theme.colors.textGreyed};
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
};
