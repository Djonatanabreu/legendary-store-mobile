import { StyleSheet } from 'react-native';
import { Colors } from '../Theme/Colors';
import { height, width } from '../Theme/Responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '95%',
    maxHeight: height(8),
  },
  checkBoxStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: width(0.8),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    width: width(6),
    height: height(3),
    marginRight: width(2),
  },
});
