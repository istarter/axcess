import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#455a64',
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
});
