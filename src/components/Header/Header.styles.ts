import {styled} from '../../services/styled/styled';

const Container = styled.View`
  height: 88px;
`;

const Content = styled.View`
  background-color: ${({theme}) => theme.colors.main1};
  flex: 1;
`;

export const HeaderStyles = {
  Container,
  Content,
};
