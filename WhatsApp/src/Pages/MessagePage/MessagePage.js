import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './MessagePage.style';
import MessageUnit from '../../Components/messagePageUnit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const videoCam = <Icon name="video" size={30} color="white" />;
const phone = <Icon name="phone" size={30} color="white" />;
const dots = <Icon name="dots-vertical" size={30} color="white" />;
const MessagePage = ({route, navigation}) => {
  const {item} = route.params;
  const goBack = (
    <Icon.Button
      name="keyboard-backspace"
      size={30}
      onPress={() => navigation.goBack()}
      style={styles.goBackButton}
    />
  );
  return (
    <SafeAreaView style={styles.enableDirection}>
      <View style={styles.topBar}>
        <View>{goBack}</View>
        <View>
          <Image style={styles.photo} source={{uri: item.receiver.imageUrl}} />
        </View>
        <View>
          <Text style={styles.nameText}>{item.receiver.firstName}</Text>
        </View>
        <View style={styles.topLeftIcons}>
          <View>{videoCam}</View>
          <View>{phone}</View>
          <View>{dots}</View>
        </View>
      </View>
      <View style={styles.container}>
        <ImageBackground
          source={require('./images.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <FlatList
            data={item.messages}
            renderItem={({item}) => <MessageUnit message={item} />}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default MessagePage;
