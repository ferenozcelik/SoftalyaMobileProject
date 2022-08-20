import {StyleSheet} from 'react-native';
import color from '../../../assets/colors/colors';
import colors from '../../../assets/colors/colors';

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
    height:250,
  },
  image2: {
    height: 40,
    width: 40,
    marginLeft: 160,
  },
  header_logo: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flexDirection: 'row',
 
  },

  backIcon: {
    color: colors.blue,
    marginLeft: 10,

  },
});
export default styles;
