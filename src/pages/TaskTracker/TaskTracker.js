import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './TaskTracker.style';

const TaskTracker = () => {
  const off_start = () => {
    null;
  };
  const off_finish = () => {
    null;
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.header_text}>Task Deatil</Text>
      </View>
      <View sytle={styles.image}>
        <Image source={require('../../assets/Image/map3.png')} />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.start} onPress={off_start}>
          <Text style={styles.button_text}>Sürüşü Başlat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.finish} onPress={off_finish}>
          <Text style={styles.button_text}>Sürüşü Sonlandır</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default TaskTracker;
