import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from './Loadin.style';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="blue" />
    </View>
  );
};

export default Loading;
