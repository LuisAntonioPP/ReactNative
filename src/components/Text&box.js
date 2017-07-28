import React,{Component} from 'react';
import {Text, TextInput,View} from 'react-native';

//make a component
class TextBox extends Component{
    render() {
        const {textStyle, contentStyle,Box} = styles;
        return (
            <View style={contentStyle}>
            <Text style={textStyle}>{this.props.text}</Text>
                <TextInput
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={Box}
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        );
    }
}

const  styles ={
    contentStyle:{
        flexDirection:'row'
    },
    textStyle:{
        fontSize:20
    },
    Box:{
        marginLeft:30,
        marginTop:5,
        marginBottom:5,
        height: 30,
        width:150,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems:'flex-end'
    }
};

//make the component available
export default TextBox;
