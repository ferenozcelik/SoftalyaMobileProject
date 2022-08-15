import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../../../assets/colors/colors';

const TaskComponent = ({product, onSelect}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.icon}>
          <TouchableOpacity onPress={onSelect}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/icon.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default TaskComponent;
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    borderTopRightRadius: 0,
  },
  title: {
    color: colors.blue,
    fontSize: 15,
    margin: 10,
  },
  description: {
    margin: 5,
  },
  icon: {
    alignItems: 'flex-end',
    margin: 10,
  },
  image: {
    height: 20,
    width: 20,

    
  },
});
