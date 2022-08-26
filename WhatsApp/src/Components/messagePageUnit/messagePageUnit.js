import React from 'react';
import {View, Text} from 'react-native';
import styles from './messagePageUnit.style';
const MessageUnit = props => {
  const hourSection = props.message.dateTime.split('T')[1];
  // dateTime info splited into two array item, first is date second is hour.
  const hourInfo = hourSection.substring(0, 5);
  // Only the first five element of string are needed for hour info.
  return (
    <View style={styles.messageUnitView}>
      <Text style={styles.textMessage}>{props.message.text}</Text>
      <View style={styles.textHourView}>
        <Text style={styles.textHour}>{hourInfo}</Text>
      </View>
    </View>
  );
};
export default MessageUnit;
