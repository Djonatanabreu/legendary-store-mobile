import { ButtonProps } from 'react-native';

export interface buttonProps extends ButtonProps {
  title: string;
  onPress: () => void;
  enabled: boolean;
}
