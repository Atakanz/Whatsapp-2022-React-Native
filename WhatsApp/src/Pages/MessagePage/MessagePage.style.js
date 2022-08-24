import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  enableDirection: {
    flex: 1,
  },
  topBar: {
    backgroundColor: '#198754',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 7,
    marginRight: 14,
  },
  nameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  topLeftIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
    width: Dimensions.get('window').width / 3.5,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  goBackButton: {
    flex: 0,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#198754',
    margin: 0,
    padding: 0,
    paddingTop: 0,
    color: 'white',
  },
});
