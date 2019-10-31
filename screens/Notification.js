import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
export default class Notification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.notifRow}>
          <Text style={styles.notifText}>Notifications</Text>
          <View style={styles.notifCounter}>
            <Text style={styles.counterText}>12</Text>
          </View>
          {/*notif counter */}
        </View>
        <View style={styles.sectionStyle}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.searchImg}></Image>
          <TextInput
            style={{flex: 1}}
            placeholder="Search for name"
            placeholderTextColor="#cecece"
          />
        </View>
        <View style={styles.textRow}>
          <Text style={[styles.spaceBeetwen, styles.colorText]}>TODAY</Text>
          <Text style={styles.colorText}>LAST WEEK</Text>
        </View>
        <View style={styles.notificationBox}>{/*notification box*/}</View>
      </View>
    );
  }
}
const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 20,
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  notifText: {
    fontWeight: 'bold',
    color: '#26254f',
    fontSize: 30,
    marginRight: 120,
    marginTop: 120,
  },
  notificationBox: {
    backgroundColor: '#26254f',
    height: 1.5 * (DIMENSION_HEIGHT / 2.5),
    width: DIMENSION_WIDTH,
    borderRadius: 35,
    position: 'absolute',
    bottom: 0,
  },
  whiteText: {
    color: 'white',
  },
  sectionStyle: {
    borderRadius: 10,
    height: 40,
    width: DIMENSION_WIDTH - 40,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 45,
  },
  searchImg: {
    tintColor: 'black',
    height: 25,
    width: 25,
    padding: 10,
    margin: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textRow: {
    flexDirection: 'row',
    //justifyContent: 'space-between', - doesnt work
    marginRight: 200,
    marginTop: 40,
  },
  notifRow: {
    flexDirection: 'row',
  },
  spaceBeetwen: {
    marginRight: 20,
  },
  notifCounter: {
    height: 40,
    width: 40,
    backgroundColor: '#ffe2b3',
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    borderColor: '#faaa38',
  },
  counterText: {color: '#faaa38'},
  colorText: {
    color: '#26254f', //write if press - blue else grey
  },
  // #ffe2b3 - notif box (orange)
  //#faaa38 - notif text (o)
  //#7970e8 - purple
  //#f73b39 red
  //#26254f - dark blue
  //#5c82e7 - blue'
});
