import React, { Component } from 'react';
import { View, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import formStyles from '../theme/formStyles';


class FormActivity extends Component {
    render(){
        return(
            <View style={formStyles.formView}>
               <ActionButton
                verticalOrientation="down"
                position ="right"
                buttonColor="rgba(3,59,179,1)"
                onPress={() => { console.log("hi")}}
                />
            </View>
        )
    }
}

export default FormActivity;