import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from './messagePageUnit.style'

const MessageUnit = props => {
    return (
            <View style={styles.messageUnitView}>
                <Text style={styles.textMessage}>{props.message.text}</Text>
                
            </View>
    )
}

export default MessageUnit;