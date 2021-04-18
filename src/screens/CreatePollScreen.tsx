import React, {useMemo} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {IAppStack} from '../../App';
import {styled, useTheme} from '../services/styled/styled';
import {FormCreatePoll} from '../components/FormCreatePoll/FormCreatePoll';
import {HeaderContent} from '../components/Header/HeaderContent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextButton} from '../components/Button/TextButton';
import {useDispatch} from '../store/store';
import {createPollAction} from '../store/stores/createPoll/createPollStore';

interface Props {
  navigation: StackNavigationProp<IAppStack, 'CreatePoll'>;
  route: RouteProp<IAppStack, 'CreatePoll'>;
}

export const CreatePollScreen = ({route}: Props) => {
  const chatId = route.params.chatId;
  const theme = useTheme();
  const dispatch = useDispatch();

  const gradientConfig: LinearGradientProps = useMemo(
    () => ({
      useAngle: true,
      angle: 154,
      angleCenter: {x: 0.5, y: 0.5},
      locations: [0, 0.5, 1],
      colors: [
        theme.colors.blueGradient,
        theme.colors.main2Transparent,
        theme.colors.blueGradient,
      ],
    }),
    [theme.colors.blueGradient, theme.colors.main2Transparent],
  );

  const createPoll = () => dispatch(createPollAction(chatId));

  const renderCreateButton = () => (
    <TextButton label={'Create'} onPress={createPoll} />
  );

  return (
    <Container>
      <GradientBackground {...gradientConfig}>
        <HeaderStyled
          title={'New Poll'}
          renderRightButton={renderCreateButton}
        />
        <FormCreatePoll />
      </GradientBackground>
    </Container>
  );
};

const HeaderStyled = styled(HeaderContent)`
  border-top-left-radius: ${({theme}) => theme.borderRadius.card}px;
  border-top-right-radius: ${({theme}) => theme.borderRadius.card}px;
  padding-vertical: 18px;
`;

const GradientBackground = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  border-top-left-radius: ${({theme}) => theme.borderRadius.card}px;
  border-top-right-radius: ${({theme}) => theme.borderRadius.card}px;
`;

const Container = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.colors.main2};
  border-top-left-radius: ${({theme}) => theme.borderRadius.card}px;
  border-top-right-radius: ${({theme}) => theme.borderRadius.card}px;
`;
