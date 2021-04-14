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
  CreatePoll: undefined;
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
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="CreatePoll"
              component={CreatePollScreen}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
