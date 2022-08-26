import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  TopGreen: {
    backgroundColor: '#198754',
    height: Dimensions.get('window').height / 7,
    justifyContent: 'space-between',
  },
  // Tab names are placed at the bottom of topGreen view
  enableDirection: {
    flex: 1,
  },
  // flexDirection of all views are set changeable
  topArea: {
    flexDirection: 'row',
  },
  topAppName: {
    fontSize: 25,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  topIconsSide: {
    padding: 10,
    marginLeft: 'auto',
    // Icons of the greenview are placed left side
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  topBottomBar: {
    flexDirection: 'row',
  },
  topTexts: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  activatedText: {
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    borderTopWidth: 0,
  },
  viewText: {
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  seperator: {
    borderWidth: 0.3,
    borderColor: 'lightgray',
    // FlatList items are separated by a thin, gray line.
  },
  topBarText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  cameraIcon: {
    marginRight: 'auto',
    marginLeft: 5,
  }
});
