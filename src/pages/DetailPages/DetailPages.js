import React from 'react';
import styles from './DetailPages.style';
import {View, Text,Image} from 'react-native';
const DetailPages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.task_text}>Görevler</Text>
      </View>
      <View style={styles.map_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/map.png')}
        />
      </View>
    </View>
  );
};
export default DetailPages;
