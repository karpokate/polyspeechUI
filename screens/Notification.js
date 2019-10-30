import React from 'react';
import {View, Text, StyleSheet, Dimensions, SafeAreaView} from 'react-native';

export default class Notification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}></View>

        <Text>TODAY</Text>
        <Text>LAST WEEK</Text>
        <View style={styles.notificationBox}>
          {/*notification box*/}
          <Text style={styles.whiteText}>HI, my dear friends</Text>
        </View>
      </View>
    );
  }
}
const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {},
  notificationBox: {
    flex: 1,
    backgroundColor: '#26254f',
    height: DIMENSION_HEIGHT,
    width: DIMENSION_WIDTH,
    borderRadius: 35,
    position: 'absolute',
    //bottom: 35,
    bottom: -800,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  imageBox: {
    borderRadius: 40,
  },
  searchBox: {
    borderRadius: 10,
    height: 40,
    width: DIMENSION_WIDTH - 20,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  serchText: {
    color: '#cecece',
  },

  // #ffe2b3 - notif box (orange)
  //#faaa38 - notif text (o)
  //#7970e8 - purple
  //#f73b39 red
  //#26254f - dark blue
  //#5c82e7 - blue
});
