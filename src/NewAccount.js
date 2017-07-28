import  React ,{Component} from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { View,
         Text,
    StyleSheet
} from 'react-native';

var radio_props =[
    {label: 'Si', value:0},
    {label: 'No', value:1}
];
class  NewAccount extends Component{
    static navigationOptions ={
        title:'Smart Agent'
    };
    render () {
        var {navigate}=this.props.navigation;
        return (
            <View style={styles.layoutStyle}>
                <Text style={styles.textStyle}>Eres agente de seguros</Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    onPress={() =>
                        navigate('Third', {})}
                    style={styles.radioButtonStyles}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    layoutStyle:{
        flex:1,
        justifyContent:'center'

    },
    textStyle:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    radioButtonStyles:{
        justifyContent:'space-around'
    },
});

export  default  NewAccount;