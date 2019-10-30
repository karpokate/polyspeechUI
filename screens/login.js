import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.backgroundImg}>
          <View style={styles.contentBox}>
            <Text style={styles.loginText}>LOGIN</Text>
            <TextInput
              style={styles.textBox}
              textAlign="center"
              placeholder="e-mail adress"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.textBox}
              textAlign="center"
              placeholder="password"
              placeholderTextColor="white"
            />
            <Text style={[styles.textColor, styles.passwordText]}>
              Forgot passsword?
            </Text>
            <TouchableOpacity style={[styles.button, styles.loginButton]}>
              <Text style={styles.textColorButton}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={[styles.textColor, styles.accountText]}>
              Don't have an account yet?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signUp')}
              style={[styles.button, styles.accountButton]}>
              <Text style={styles.textColorButton}>Create an Account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default login;

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    backgroundColor: '#26254f',
    borderRadius: 20,
    width: DIMENSION_WIDTH - 20,
    height: DIMENSION_HEIGHT - 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: -80,
    marginBottom: 40,
  },
  textBox: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 10,
    height: 50,
    width: 340,
  },
  textColor: {
    color: 'white',
  },
  passwordText: {
    marginLeft: 140,
    marginTop: 10,
  },
  accountText: {
    marginRight: 16,
    marginTop: 25,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  loginButton: {marginTop: 25},
  accountButton: {marginTop: 20},
  textColorButton: {
    color: '#26254f',
    fontWeight: 'bold',
  },
});
