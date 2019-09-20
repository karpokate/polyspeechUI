import React from 'react';
import {View, Text} from 'react-native';

class firstScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>THIS IS FIRST SCREEN</Text>
        <Text onPress={() => this.props.navigation.navigate('login')}>
          CLICK ON THIS LOGIN BUTTON
        </Text>
        <Text onPress={() => this.props.navigation.navigate('signUp')}>
          CLICK ON THIS SIGN UP BUTTON
        </Text>
      </View>
    );
  }
}

export default firstScreen;
