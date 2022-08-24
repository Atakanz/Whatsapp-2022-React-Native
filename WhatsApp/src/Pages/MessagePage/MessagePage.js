import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from './MessagePage.style';

const MessagePage = ({route}) => {
   const {item} = route.params


    return (
        <View>
            <Text>ID:{item.receiver.firstName}</Text>
        </View>
    )
}

export default MessagePage;