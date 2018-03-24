import {StyleSheet, Dimensions} from 'react-native';

let height = Dimensions.get('window').height-180;
 const styles = StyleSheet.create({
    formView:{
        marginTop:height  
    }
  });
 

  export default styles;