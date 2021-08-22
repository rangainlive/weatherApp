/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';

const HeaderComponent = props => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#04a6f8',
          accent: 'white',
        },
      }}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Title style={{color: 'white'}}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default HeaderComponent;
