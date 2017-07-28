import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Navigator,
    View
} from 'react-native';

const  ButtonFooter =(props) => {
    return (
        <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress} >
            <Text style={styles.text}>{props.textButton}</Text>
        </TouchableOpacity>
        </View>

    );
};

const  styles = StyleSheet.create({
    buttonStyle:{

        width:200,
        height: 30,
        marginTop:10,
        borderRadius:5,
        justifyContent:'center',
        left:0,
        right:0,
        bottom:0,
        top:70,



    },
    text:{
        textAlign: 'center',
        color:'blue',
        textDecorationLine:'underline',
        marginTop:4,
        marginBottom:4
    },
});

export  default  ButtonFooter;
