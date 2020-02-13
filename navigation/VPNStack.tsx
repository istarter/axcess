import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import Welcome from '../screens/WelcomeScreen';
import VPN from '../screens/VPNScreen';


const screens = createSwitchNavigator({
    Welcome,
    VPN
});

export default createAppContainer(screens);