import React,{Component} from 'react';
import {View, Text,TextInput} from 'react-native';

class TextArea extends Component{
    render(){
        return(
          <View>
              <TextInput
                  editable = {true}
                  maxLength = {40}
                  multiline = {true}
                  numberOfLines = {4}
                  //onChangeText={(text) => this.setState({text})}
                  //value={this.state.text}
              />
          </View>
        );
    }
}
export default TextArea;