import React,{Component} from 'react';
import {View, Text,StyleSheet,ScrollView} from 'react-native';
import Button from './components/Button';
import TextBox from './components/Text&box';
import DatePicker from './components/DatePicker';

class PersonalForm extends Component {
    state = {name: '', lastName: '',rfc:'',email:'', cellphone:'',date:'2000-01-01'};
    render(){
        var {navigate}=this.props.navigation;
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Datos personales</Text>
                <TextBox
                    placeholder="Escribir..."
                    text={'     Nombre :'}
                    value={this.state.user}
                    onChangeText={user => this.setState({user})}
                />
                <TextBox
                    placeholder="Escribir..."
                    text={'Apellido(s) :'}
                    value={this.state.lastName}
                    onChangeText={lastName => this.setState({lastName})}
                />
                <View style={styles.dateStyle}>
                <DatePicker
                Date={this.state.date}
                date={this.state.date}
                onDateChange={date => this.setState({date: date})}
                />
                </View>
                <TextBox
                    placeholder="Escribir..."
                    text={'            RFC :'}
                    value={this.state.rfc}
                    onChangeText={rfc => this.setState({rfc})}
                />
                <TextBox
                    placeholder="Escribir..."
                    text={'         E-mail :'}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                />
                <TextBox
                    placeholder="Escribir..."
                    text={'        Celular :'}
                    value={this.state.cellphone}
                    onChangeText={cellphone => this.setState({cellphone})}
                />
                <View style={styles.buttonStyle}>
                <Button
                    textButton={'Continuar'}
                    onPress={() =>
                        navigate('Quarter', {})}
                />
                </View>
            </View>
        );
    };
}
const styles= StyleSheet.create({
    containerStyle:{
        flex:1,
        alignItems:'center',
    },
    textStyle:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textBox:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10
    },
    buttonStyle:{
        width:200,
        height: 30,
        backgroundColor:'#2FED16',
        marginTop:40,
        marginBottom:10,
        marginLeft:15,
        borderRadius:5,
        justifyContent:'center',
    },
    dateStyle:{
        justifyContent:'space-around',
        marginTop:10,
        marginBottom:10
    }

});

export default PersonalForm;
