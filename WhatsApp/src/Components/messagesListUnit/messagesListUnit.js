import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from './messagesListUnit.style'



const MessagesUnit = props => {

    return (
        <TouchableOpacity style={styles.messagesUnit} onPress={props.onPress}>
            <View style={styles.photoTextCover}>
                <View>
                    <Image style={styles.photo} source={{ uri: props.info.imageUrl }}
                    />
                </View>
                <View style={styles.unitTextView}>
                    <Text style={styles.unitText}>{props.info.firstName} {props.info.lastName}</Text>
                    <Text style={styles.unitText}>{props.messageInfo[0].text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MessagesUnit;