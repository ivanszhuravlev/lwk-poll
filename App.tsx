import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {store, useDispatch} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ChatScreen} from './src/screens/ChatScreen';
import {CreatePollScreen} from './src/screens/CreatePollScreen';
import {getChatsAction} from './src/store/stores/chats/chatsActions';

export type IAppStack = {
  Chat: undefined;
  CreatePoll: undefined;
};

const App = () => {
  const dispatch = useDispatch();
  const Stack = createStackNavigator<IAppStack>();

  useEffect(() => {
    dispatch(getChatsAction());
  }, [dispatch]);

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
