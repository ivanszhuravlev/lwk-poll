/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
