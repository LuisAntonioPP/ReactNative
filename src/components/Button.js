import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const  Button =(props) => {
    return (
    <View>
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.text}>{props.textButton}</Text>
        </TouchableOpacity>
    </View>
    );
};

const  styles = StyleSheet.create({
    buttonStyle:{

    },
    text:{
        textAlign: 'center',
        marginTop:4,
        marginBottom:4
    },
});

export  default  Button;

