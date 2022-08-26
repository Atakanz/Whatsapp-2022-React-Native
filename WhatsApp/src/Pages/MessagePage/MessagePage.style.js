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
  sendBar: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  textBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  bottomIcons: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  textInput: {
    width: Dimensions.get('window').width / 1.85,
    fontSize: 18,
  },
  microphoneIcon: {
    borderRadius: 50,
    backgroundColor: '#198754',
    justifyContent: 'center',
    marginLeft: 5,
    alignItems: 'center',
    width: Dimensions.get('window').width / 8.7,
  },
  dateView: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    color: 'white',
    width: 'auto',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    padding: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dateText: {
    color: 'lightblack',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
