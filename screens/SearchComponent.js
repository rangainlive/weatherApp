import React from 'react';
import {View, Text} from 'react-native';
import HeaderComponent from './HeaderComponent';

const SearchComponent = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <HeaderComponent name="Search Screen" />
      <Text> Search Screen</Text>
    </View>
  );
};

export default SearchComponent;
