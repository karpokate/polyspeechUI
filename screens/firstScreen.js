import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class firstScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
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
    height: '100%',
    width: '100%',
    paddingBottom: 20,
    flex: 1,
    backgroundColor: '#26254f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 70,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 10,
  },
  textColor: {
    color: '#26254f',
    fontWeight: 'bold',
  },
});
