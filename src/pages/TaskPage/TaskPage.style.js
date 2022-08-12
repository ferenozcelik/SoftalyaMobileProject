import {StyleSheet} from 'react-native';
import color from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9E0EA',
    flex: 1,
  },
  header: {
    backgroundColor: color.blue,
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  task_text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 350,
  },
  map_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  image2: {
    height: 40,
    width: 40,
    marginRight: 1,
  },
  header_logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:'row',
  },
  header_text:{
    fontSize:24,
    fontWeight:'bold',
    marginLeft:20,
    color:'black',

  }
});
export default styles;
