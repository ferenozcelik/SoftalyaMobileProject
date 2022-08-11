import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/colors';
export default StyleSheet.create({
  container: {flex: 1},
  header: {
    backgroundColor: Colors.blue,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: 10,
  },
  header_text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 100,
  },
  button: {
    marginTop: 40,
    margin: 30,
    padding: 4,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    width: 200,
    height: 100,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    color: Colors.white,
    margin: 20,
  },
  finish: {
    backgroundColor: Colors.blue,
    width: 200,
    height: 100,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    color: Colors.white,
  },
  button_text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
});
