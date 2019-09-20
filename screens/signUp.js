import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//auth : phone number,email, password => next page
class signUp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Image
          source={require('../assets/images/arc.png')}
          style={styles.backgroundImage}
          resizeMode="stretch"></Image>
        <Text> THIS IS SIGN UP SCREEN</Text>
        <TextInput style={styles.textBox} textAlign="center"></TextInput>
        <TextInput style={styles.textBox} textAlign="center"></TextInput>
        <TextInput style={styles.textBox} textAlign="center"></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textColor}>SIGN UP</Text>
        </TouchableOpacity>
        <Text>Do you have account?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('login')}>
          <Text style={styles.textColor}>LOGIN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default signUp;
const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#03DAC5',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    marginTop: 10,
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
  },
});
