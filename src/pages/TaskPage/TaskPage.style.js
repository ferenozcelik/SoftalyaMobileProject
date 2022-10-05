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
    height:200
  },
  image: {
    height: 200,
    width: 350,
  },
  map_container: {
    height: 250,
  },
  image2: {
    height: 40,
    width: 40,
    marginLeft: 90,
  },
  header_logo: {
    paddingTop:5,
    height:50,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  backIcon: {
    color: colors.blue,
    marginLeft: 10,
  },
  text: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default styles;
