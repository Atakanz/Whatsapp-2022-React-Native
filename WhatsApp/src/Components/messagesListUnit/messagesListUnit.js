import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from './messagesListUnit.style'



const MessagesUnit = props => {



    return (
        <TouchableOpacity style={styles.messagesUnit} onPress={props.onPress}>
            <View>
                <Image source={{uri: props.info.imageUrl}}/>
            </View>
            <View>
                <Text>{props.info.firstName} {props.info.lastName}</Text>
                <Text>{props.messageInfo[0].text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MessagesUnit;