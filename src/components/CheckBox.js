import React,{Component} from 'react';
import {View} from 'react-native'
import Checkbox from 'react-native-checkbox';

class CheckBox extends Component{
    render(){
        return(
            <View>
                <Checkbox
                    label={this.props.label}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
            </View>
        );
    }
}

export default CheckBox;