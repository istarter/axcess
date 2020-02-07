import React, {useState} from 'react';
import HomeStack from './navigation/HomeStack';
import { StyleSheet } from 'react-native';



export default function App() {
  return (
      <HomeStack />
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#fff',
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
});
