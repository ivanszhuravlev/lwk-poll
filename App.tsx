import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ChatScreen} from './src/screens/ChatScreen';
import {CreatePollScreen} from './src/screens/CreatePollScreen';

export type IAppStack = {
  Chat: {id: string};
  CreatePoll: undefined;
};

const App = () => {
  const Stack = createStackNavigator<IAppStack>();

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Chat"
            headerMode="none"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="Chat" component={ChatScreen} />
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
      </SafeAreaView>
    </Provider>
  );
};

export default App;
