import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class firstScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('login')}>
            <Text style={styles.textColor}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('signUp')}>
            <Text style={styles.textColor}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default firstScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    paddingBottom: 20,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    backgroundColor: '#6200EE',
    flex: 0.3,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
