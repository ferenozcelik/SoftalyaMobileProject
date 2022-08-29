 
import React from 'react';
import {View, Image} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './Marker.style';
 
const Markers = ({coordinates, userImageURL, onSelect}) => {
  return (
    <Marker coordinate={coordinates} onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: userImageURL}} />
      </View>
    </Marker>
  );
};
export default Markers;
