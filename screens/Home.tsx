import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

/**
 * Home screen
 */
export default class Home extends React.Component {

        // static navigationOptions = {
        //     title: 'test',
        // };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Button
                    title="Go to profile screen"
                    onPress={() => navigate(
                        'Profile', { name: 'Jane' }
                    )}
                />
                
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#11110f'
    },
    logo: {
        
    }
});