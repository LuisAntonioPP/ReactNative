import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import CheckBox from './components/CheckBox';
import TextArea from './components/TextArea';
import Button from './components/Button';

class WorkForm extends  Component {
    render(){
        var {navigate}=this.props.navigation;
        return(
            <View style={styles.styleContent}>
                <Text style={styles.textStyle}>
                    Compañias de seguros con las que trabajas
                </Text>

                <View style={styles.styleCheckBoxRow}>
                    <CheckBox
                        label={'Metlife'}
                    />
                    <CheckBox
                        label={'Qualitas'}
                    />
                </View>
                <View style={styles.styleCheckBoxRow}>
                    <CheckBox
                        label={'Mapfre'}
                    />
                    <CheckBox
                        label={'AXA       '}
                    />
                </View>
                <Text style={styles.textStyle}>
                    Otros
                </Text>
                <View style={styles.textareaStyle}>
                    <TextArea/>
                </View>
                <Text style={styles.textStyle}>
                    Seguros que manejas
                </Text>

                <View style={styles.styleCheckBoxColumn}>
                    <CheckBox
                        label={'Gastos Médicos'}
                    />
                    <CheckBox
                        label={'Autos                  '}
                    />
                    <CheckBox
                        label={'Accidente           '}
                    />
                </View>
                <View style={styles.buttonStyle}>
                <Button
                    textButton={'Continuar'}
                    onPress={() =>
                        navigate('fifth', {})}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    styleContent:{
        flexDirection:'column',
        //alignItems:'center',
        //justifyContent:'space-around'
    },
    textareaStyle:{
        borderBottomColor:'#000000',
        borderTopColor:'#000000',
    },
    styleCheckBoxRow : {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    styleCheckBoxColumn:{
        alignItems:'center',
        flexDirection:'column'
    },
    buttonStyle:{
        width:200,
        height: 30,
        backgroundColor:'#2FED16',
        marginTop:40,
        marginBottom:10,
        marginLeft:75,
        borderRadius:5,
        //justifyContent:'center',


    },
    textStyle:{
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
    space:{
        marginRight:30
    },

});
export default WorkForm;
