import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  messagesUnit: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 9,
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  photoTextCover: {
    flexDirection: 'row',
  },
  unitTextView: {
    justifyContent: 'center',
  },
  unitText: {
    fontSize: 16,
    color: 'black',
  },
  hourInfoView: {
    marginLeft: 'auto',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
