import React from 'react';
import {View, Text, Button, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class login extends React.Component {
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
        <Text> THIS IS LOGIN SCREEN</Text>
        <TextInput style={styles.textBox} textAlign="center"></TextInput>
        <TextInput style={styles.textBox} textAlign="center"></TextInput>
        <Text>Forgot passsword?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textColor}>LOGIN</Text>
        </TouchableOpacity>
        <Text>Don't have an account yet?</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('signUp')}
          style={styles.button}>
          <Text style={styles.textColor}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default login;

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
