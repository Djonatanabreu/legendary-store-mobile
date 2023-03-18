import { StyleSheet } from 'react-native';
import { Colors } from '../Theme/Colors';
import { height, width } from '../Theme/Responsive';

export const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 4,
    backgroundColor: Colors.Green,
    width: width(60),
    height: height(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
