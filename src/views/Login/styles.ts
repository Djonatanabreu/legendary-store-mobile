import { StyleSheet } from 'react-native';
import { Colors } from '../../components/Theme/Colors';
import { height, width } from '../../components/Theme/Responsive';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width(5),
    height: height(100),
    alignItems: 'center',
    backgroundColor: Colors.DarkGrey,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(90),
  },
});
