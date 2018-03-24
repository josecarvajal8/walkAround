import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import FormActivity from '../components/formActivity';
class Home extends Component {
    render(){
        return(
        <View>
            <FormActivity/>
        </View>
        )
    }
}

export default Home;