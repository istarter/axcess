import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block } from 'expo-ui-kit';
export default class WelcomeScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>Welcome Screens</Text>
                <Text>Welcome Screens</Text>
                <Text>Welcome Screens</Text>
                <Text>Welcome Screens</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
