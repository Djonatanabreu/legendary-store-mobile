import { RectButton } from 'react-native-gesture-handler';
import { Text } from '../Text/Text';
import { Colors } from '../Theme';
import { styles } from './styles';
import { buttonProps } from './types';

export const Button = ({ onPress, title, enabled, ...props }: buttonProps) => {
  return (
    <RectButton
      enabled={enabled}
      style={[
        styles.loginButton,
        { backgroundColor: enabled ? Colors.FlourescentGreen : Colors.Green },
      ]}
      onPress={onPress}
      {...props}
    >
      <Text font='brutalBold' color='White'>
        {title}
      </Text>
    </RectButton>
  );
};
