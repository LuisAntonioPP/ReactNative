import React, { Component } from 'react';
import TextBox from './components/Text&box';
import  Button from './components/Button';
import Footer from './components/Footer'
import FooterPaswoord from './components/Footer2';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class LoginForm extends Component {
    state = {user: '', password: ''};
    static navigationOptions ={
        title:'Smart agent'
    };
    render() {
        var {navigate}=this.props.navigation;
        return (
            <View style={styles.ScreenStyles}>

                <Text style={styles.welcome}>
                    Smart Agent
                </Text>
                <TextBox
                    placeholder="Escribir..."
                    text={'       Usuario :'}
                    value={this.state.user}
                    onChangeText={user => this.setState({user})}
                />
                <TextBox
                    secureTextEntry
                    placeholder="Escribir..."
                    text={'Contraseña :'}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                />
                <View style={styles.buttonStyle}>
                <Button textButton={'Iniciar Sesión'} />
                </View>

                    <Footer textButton={'Crear una cuenta'}    onPress={() =>
                        navigate('Second', {})
                    }/>
                    <FooterPaswoord textButton={'¿Olvidaste tu contraseña?'}/>



            </View>

        );
    }
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    footerStyle:{
        justifyContent:'flex-end'
    },
    ScreenStyles:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonStyle:{
        width:200,
        height: 30,
        backgroundColor:'#2FED16',
        marginTop:40,
        marginBottom:10,
        marginLeft:20,
        borderRadius:5,
        justifyContent:'center',


    }
});

export default LoginForm;
