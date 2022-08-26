import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './TaskDetailStyle';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TaskDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.bass}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TaskPages');
          }}>
          <Icon name="chevron-left" size={40} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.img}
          source={require('../../../assets/images/logok.png')}
        />
        <Text style={styles.head_title}>Detaylar</Text>
      </View>

      <View style={styles.map_container}>
        <SafeAreaView style={{flex: 1}}>
          <MapView provider="google" style={{flex: 1}} />
        </SafeAreaView>
      </View>

      <View style={styles.detayBox}>
        <Text style={styles.detaytitle}>{item.title}</Text>
        <Text style={styles.detayt}>{item.description}</Text>
      </View>
    </View>
  );
};

export default TaskDetail;
