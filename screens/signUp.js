import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//auth : phone number,email, password => next page
class signUp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.backgroundImg}>
          <View style={styles.contentBox}>
            <Text style={styles.signText}>SIGN UP</Text>
            <TextInput
              style={styles.textBox}
              textAlign="center"
              placeholder="Your name"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.textBox}
              textAlign="center"
              placeholder="E-mail adress"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.textBox}
              textAlign="center"
              placeholder="password"
              placeholderTextColor="white"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={[styles.textColor, styles.accountText]}>
              Do you have account?
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('login')}>
              <Text style={styles.textButton}>LOGIN NOW</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default signUp;

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
    borderRadius: 10,
    width: DIMENSION_WIDTH - 20,
    height: DIMENSION_HEIGHT - 250,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 10,
    height: 50,
    width: 340,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    marginTop: 20,
  },
  textButton: {
    color: '#26254f',
    fontWeight: 'bold',
  },
  textColor: {
    color: 'white',
  },
  signText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: -80,
    marginBottom: 40,
  },
  accountText: {
    fontWeight: 'bold',
    marginTop: 25,
  },
});
