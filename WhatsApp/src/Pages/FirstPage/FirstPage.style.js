import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        TopGreen: {
            backgroundColor: '#198754',
            height: Dimensions.get('window').height/7,
            justifyContent:'space-between',
        },
        enableDirection: {
            flex: 1 ,
        },
        topArea: {
            flexDirection:'row'
        },
        topAppName: {
            fontSize:25,
            color:'white',
            marginTop:10,
            marginLeft: 10,
            fontWeight: 'bold',
        },
        topIconsSide: {
            padding: 10,
            marginLeft:'auto',
            flexDirection:'row',
            justifyContent:'space-evenly'
        },
        topBottomBar: {
           flexDirection:'row',
           justifyContent:'space-evenly',

        },
        topTexts: {
            fontSize:16,
            color:'white',
            fontWeight:'bold',
            marginHorizontal:5,
           
        },
        activatedText: {
            borderWidth:1,
            borderColor:'white',
            borderRadius: 10,
        },
        viewText: {
            justifyContent:'center',
        },
        seperator: {
            borderWidth:0.3,
            borderColor:'lightgray',
        }
        
    }
)