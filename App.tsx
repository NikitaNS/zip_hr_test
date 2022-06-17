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
import {SafeAreaView} from 'react-native';

import NewsScreen from './src/feature/News/screens/NewsScreen/NewsScreen';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NewsScreen />
    </SafeAreaView>
  );
};

export default App;
