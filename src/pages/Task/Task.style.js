import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/colors';
export default StyleSheet.create({
  header: {
    fontSize: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    flex: 1,
  },

  icon_image: {
    maxHeight: 50,
    maxWidth: 50,
    bottom: 80,
    left: 200,
  },
  icons_items: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    flexDirection: 'row',
    marginLeft: 100,
    margin: 100,
  },
  header_text: {
    fontSize: 24,
    marginRight: 120,
  },
  header_image: {
    height: 40,
    width: 40,
    marginRight: 20,
  },
  tasks: {
    backgroundColor: Colors.blue,
    height: 45,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    color: Colors.white,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    marginBottom: 10,
  },
  taskitems: {
    height: 100,
    width: 375,

    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    margin: 10,
    backgroundColor: Colors.white,
  },
  taskItemTitle: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  taskItemDescription: {
    color: Colors.darkGray,
    marginLeft: 10,
    marginTop: 5,
  },
});
