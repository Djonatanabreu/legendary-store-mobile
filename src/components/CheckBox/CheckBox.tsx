import { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Colors } from '../Theme/Colors';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { styles } from './styles';

interface checkBoxProps {
  text: string;
  onPress: (checked: boolean) => void;
}

export const CheckBox = ({ onPress, text }: checkBoxProps) => {
  const [checked, setChecked] = useState(false);

  const onPressChecker = () => {
    setChecked(!checked);
    onPress(!checked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressChecker}>
        <View
          style={[
            styles.checkBoxStyle,
            {
              backgroundColor: checked ? Colors.Blue : 'transparent',
              borderColor: checked ? Colors.Black : Colors.MediumGrey,
            },
          ]}
        >
          {checked && <Icon name="CheckMark" />}
        </View>
      </TouchableWithoutFeedback>
      <Text font="brutalRegular" color="Grey" size={18}>
        {text}
      </Text>
    </View>
  );
};
