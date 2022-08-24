import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create(
    {
      messageUnitView: {
        backgroundColor:'white',
        borderRadius:10,
        marginVertical:4,
        width:'auto',
        marginHorizontal:5,
        alignSelf:'flex-start',
        paddingHorizontal:5,
        paddingVertical:5,
        flexDirection:'row'
       
      },
      textMessage: {
        fontSize: 19,
        color:'black',
      },
      textHour: {
        fontWeight:'bold',
        fontSize:13,
      },
      textHourView: {
        marginLeft:'auto',
        justifyContent:'flex-end',
        marginLeft:12,
      }
      
    }
)