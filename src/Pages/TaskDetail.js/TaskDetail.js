import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './TaskDetailStyle';

const TaskDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.bass}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/logok.png')}
        />
        <Text style={styles.head_title}>Detaylar</Text>
      </View>

      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/map2.png')}
        />
      </View>

      <View style={styles.detayBox}>
        <Text style={styles.detaytitle}>{item.title}</Text>
        <Text style={styles.detayt}>{item.description}</Text>
      </View>
    </View>
  );
};

export default TaskDetail;
