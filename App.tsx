import React, {useState, Component} from 'react';
import VPNStack from './navigation/VPNStack';
import HomeStack from './navigation/HomeStack';
import { StyleSheet } from 'react-native';



export default class VpnApp extends Component {
  render() {
    return <VPNStack />;
  }
}

const styles = StyleSheet.create({
  // container: {
  //  backgroundColor: '#fff',
  //  flex: 1,
  //  alignItems: 'center',
  //  justifyContent: 'center'
  // },
});
