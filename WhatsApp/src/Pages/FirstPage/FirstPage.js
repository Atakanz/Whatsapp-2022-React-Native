import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './FirstPage.style';
import PersonCard from '../../Components/PersonCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Messages} from '../../data/messages';
const magnify = <Icon name="magnify" size={30} color="white" />;
const dots = <Icon name="dots-vertical" size={30} color="white" />;
const camera = <Icon name="camera" size={30} color="white" />;
const Main = ({navigation}) => {
  const renderSeperator = () => <View style={styles.seperator} />;
  // FlatList items are separated by a thin, gray line.
  return (
    <SafeAreaView style={styles.enableDirection}>
      {/* START-TOPBAR */}
      <View style={styles.TopGreen}>
        <View style={styles.topArea}>
          <View>
            <Text style={styles.topAppName}>WhatsApp</Text>
          </View>
          <View style={styles.topIconsSide}>
            <View>{magnify}</View>
            <View>{dots}</View>
          </View>
        </View>
        <View style={styles.topBottomBar}>
          <View style={styles.CameraIcon}>{camera}</View>
          <View style={styles.topBarText}>
            <View style={[styles.activatedText, styles.viewText]}>
              <Text style={styles.topTexts}>SOHBETLER</Text>
            </View>
            <View style={[styles.viewText]}>
              <Text style={[styles.topTexts, styles.middleTab]}>DURUM</Text>
            </View>
            <View style={[styles.viewText]}>
              <Text style={styles.topTexts}>ARAMALAR</Text>
              {/* END-TOPBAR */}
            </View>
          </View>
        </View>
      </View>
      <View>
        {/* START-MESSAGELIST-PERSONCARDS */}
        <FlatList
          data={Messages}
          renderItem={({item}) => (
            <PersonCard
              receiverInfo={item.receiver}
              messageInfo={item.messages}
              // data comes from a js file  and goes to MessagesListUnit.
              onPress={() => navigation.navigate('Messages', {item})}
              // data of each person goes to personal MessagePage.
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
      {/* END-MESSAGELIST-PERSONCARD */}
    </SafeAreaView>
  );
};
export default Main;
