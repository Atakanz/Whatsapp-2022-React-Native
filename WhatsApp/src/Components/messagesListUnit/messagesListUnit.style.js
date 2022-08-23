import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        messagesUnit: {
            width: Dimensions.get('window').width,
            backgroundColor:'lightyellow',
            height:Dimensions.get('window').height/10,
            flex:1,
            flexDirection:'row',
        }
    }
)