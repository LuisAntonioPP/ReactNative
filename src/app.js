import React, { Component } from 'react';

import {StackNavigator,} from 'react-navigation';
import LoginForm from './LoginForm';
import NewAccount from './NewAccount';
import PersonalForm from './PersonalForm';
import  WorkForm from './WorkForm';
import  FeedBackForm from './FeedbackForm';
import {
    StyleSheet
} from 'react-native';

const  Navigation = StackNavigator({
    First: {screen: LoginForm},
    Second: {screen: NewAccount},
    Third: {screen: PersonalForm},
    Quarter: {screen: WorkForm},
    fifth: {screen:FeedBackForm}
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});


export default Navigation;
