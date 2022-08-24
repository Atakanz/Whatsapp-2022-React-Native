import React from "react";
import {SafeAreaView, View, Text, FlatList} from "react-native";
import styles from './FirstPage.style';
import MessagesUnit from '../../Components/messagesListUnit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Messages} from '../../data/messages';
const magnify = <Icon name="magnify" size={30} color="white" />;
const dots = <Icon name="dots-vertical" size={30} color="white" />;
const camera = <Icon name="camera" size={30} color="white" />;


const Main = ({navigation}) => {
    
    
        
        
   
    const renderSeperator = () => <View style={styles.seperator} />;
    return (
        <SafeAreaView style={styles.enableDirection}>
            <View style={styles.TopGreen}>
                <View style={styles.topArea}>
                    <View>
                        <Text style={styles.topAppName}>WhatsApp</Text>
                    </View>
                    <View style={styles.topIconsSide}>
                        <View>
                            {magnify}
                        </View>
                        <View>
                            {dots}
                        </View>
                    </View>
                </View>
                <View style={styles.topBottomBar}>
                    <View>
                        {camera}
                    </View>
                    <View style={[styles.activatedText,styles.viewText]}>
                        <Text style={styles.topTexts}>SOHBETLER</Text>
                    </View>
                    <View style={[styles.viewText]}>
                        <Text style={styles.topTexts}>DURUM</Text>
                    </View>
                    <View style={[styles.viewText]}>
                        <Text style={styles.topTexts}>ARAMALAR</Text>
                    </View>
                </View>
            </View>
            <View>
                <FlatList data={Messages}
                renderItem={({item})=> 
                <MessagesUnit info={item.receiver} messageInfo={item.messages} onPress={() => navigation.navigate('Messages', {item})} />}
                keyExtractor={item=>item.id}
                ItemSeparatorComponent={renderSeperator}  />
                
            </View>
        </SafeAreaView>
    )
    
}

export default Main;