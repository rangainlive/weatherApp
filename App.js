import React from 'react';
import {StatusBar, View} from 'react-native';
import SearchComponent from './screens/SearchComponent';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <SearchComponent />
    </View>
  );
};

export default App;
