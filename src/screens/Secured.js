import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class Secured extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text 
                    style={{fontSize: 27}}>
                    {this.props.token}
                </Text>
                <View style={{margin:20}} />
                <Button
                    onPress={this.props.onLogoutPress}
                    style={styles.input}
                    title="Logout"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
});