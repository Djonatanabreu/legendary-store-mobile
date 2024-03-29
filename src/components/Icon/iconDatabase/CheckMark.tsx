import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from '../../Theme';

export const CheckMark = (props: SvgProps) => (
  <Svg height='27' viewBox='0 0 22 28' width='16' color={'white'} {...props}>
    <Path
      fill={'white'}
      d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
    />
  </Svg>
);
