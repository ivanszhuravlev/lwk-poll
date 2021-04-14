import {styled, THEME} from '../../services/styled/styled';

const Screen = styled.View`
  padding-horizontal: ${({theme}) => theme.offset.medium}px;
  background-color: ${({theme}) => theme.colors.main2};
  flex: 1;
`;

export const ChatStyles = {
  Screen,
  containerStyle: {paddingTop: THEME.offset.medium},
};
