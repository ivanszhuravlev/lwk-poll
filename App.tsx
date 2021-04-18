import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ChatScreen} from './src/screens/ChatScreen';
import {CreatePollScreen} from './src/screens/CreatePollScreen';
import {ThemeProvider} from 'styled-components/native';
import {THEME} from './src/services/styled/styled';
import {StatusBar} from 'react-native';
import {getStatusBarStyle} from './src/services/styled/colors';

export type IAppStack = {
  Chat: undefined;
  CreatePoll: {chatId: string};
};

const App = () => {
  const Stack = createStackNavigator<IAppStack>();
  const statusBatStyle = getStatusBarStyle();

  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <StatusBar barStyle={statusBatStyle} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Chat"
            headerMode="none"
            // screenOptions={{
            //   headerShown: false,
            //   gestureEnabled: false,
            // }}
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              cardStyle: {backgroundColor: 'transparent'},
              cardOverlayEnabled: true,
              // cardStyleInterpolator: ({current: {progress}}) => ({
              //   cardStyle: {
              //     opacity: progress.interpolate({
              //       inputRange: [0, 0.5, 0.9, 1],
              //       outputRange: [0, 0.25, 0.7, 1],
              //     }),
              //   },
              //   overlayStyle: {
              //     opacity: progress.interpolate({
              //       inputRange: [0, 1],
              //       outputRange: [0, 0.5],
              //       extrapolate: 'clamp',
              //     }),
              //   },
              // }),
            }}
            mode="modal">
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
            <Stack.Screen
              name="CreatePoll"
              component={CreatePollScreen}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                // cardStyle: {backgroundColor: '#ffffff00', marginTop: 100},
                // cardOverlayEnabled: false,
                // cardStyleInterpolator: ({current: {progress}}) => ({
                //   cardStyle: {
                //     translateY: progress.interpolate({
                //       inputRange: [0, 0.5, 1],
                //       outputRange: [300, 300, 0],
                //     }),
                //     opacity: progress.interpolate({
                //       inputRange: [0, 0.5, 1],
                //       outputRange: [0, 0, 0.5],
                //     }),
                //   },
                //   overlayStyle: {
                //     opacity: progress.interpolate({
                //       inputRange: [0, 0.7],
                //       outputRange: [0, 0.5],
                //       extrapolate: 'clamp',
                //     }),
                //     backgroundColor: '#ff00ff44',
                //   },
                // }),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
