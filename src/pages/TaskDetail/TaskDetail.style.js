import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/colors';
export default StyleSheet.create({
  header_container: {
    height: 50,
    width: 413,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 120,
  },
  map: {
    borderRadius: 10,
  },
  icons_image: {
    maxHeight: 30,
    maxWidth: 30,
    marginRight: 100,
  },
  detail: {
    backgroundColor: Colors.darkGray,
    height: 300,
    marginTop: 20,
    borderRadius: 40,
    margin: 10,
  },
  item_text: {
    fontSize: 25,
    margin: 15,
  },
  item_text2: {
    fontSize: 15,
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    border: 1,

    alignItems: 'center',
    justifyContent: 'center',
    border: 1,
  },
  button_text: {
    fontSize: 25,
    color: 'white',
    maxHeight: 40,
    maxWidth: 150,
    marginBottom: 10,
    padding: 10,
  },
  yes: {
    borderRadius: 20,
    marginRight: 50,
    backgroundColor: 'green',
  },
  no: {
    borderRadius: 20,
    backgroundColor: 'red',
  },
});
