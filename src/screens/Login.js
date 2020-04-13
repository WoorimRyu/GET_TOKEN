import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Alert,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
    }
      
    onLogin() {
        const { username, password } = this.state;

        fetch('https://owner-api.teslamotors.com/oauth/token', {
            method: 'POST',
            mode: "no-cors",
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                email: username,
                password: password,
                grant_type: 'password'
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            this.props.onLoginPress(json.access_token);
        })
        .catch((error) => {
            console.error(error);
            // this.props.onLoginPress('');
            Alert.alert('아이디/비밀번호를 다시 확인해주세요.');
        })
        .finally(() => {
            
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}
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