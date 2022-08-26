import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './PersonCard.style';
const MessagesUnit = props => {
  const timeLastMessage =
    props.messageInfo[props.messageInfo.length - 1].dateTime.split('T')[1];
  const hourLastMessage = timeLastMessage.substring(0, 5);
  return (
    <TouchableOpacity style={styles.messagesUnit} onPress={props.onPress}>
      <View style={styles.photoTextCover}>
        <View>
          <Image
            style={styles.photo}
            source={{uri: props.receiverInfo.imageUrl}}
          />
        </View>
        <View style={styles.unitTextView}>
          <Text style={styles.unitText}>
            {props.receiverInfo.firstName} {props.receiverInfo.lastName}
          </Text>
          <Text style={styles.unitText}>
            {props.messageInfo[props.messageInfo.length - 1].text}
          </Text>
        </View>
        <View style={styles.hourInfoView}>
          <Text>{hourLastMessage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MessagesUnit;
