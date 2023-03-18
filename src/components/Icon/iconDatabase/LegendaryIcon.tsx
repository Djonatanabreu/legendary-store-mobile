import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const LegendaryIcon = () => (
  <Svg width={70} height={70} fill='none'>
    <Path
      d='M13.765 42.388c0 4.788.113 8.647 0 8.715-.316.206-3.046-1.67-4.084-2.833-1.58-1.801-3.588-5.039-3.588-5.746 0-.182.902-.228 2.775-.205l2.821-2.28-2.82-2.189-3.002-.114H0v.525c0 1.094.925 4.15 1.873 6.179 2.595 5.54 6.544 9.69 10.56 11.15l1.377.501.52 1.46c1.037 2.85 3.7 6.042 6.882 8.23 2.843 1.962 7.492 3.945 9.613 4.15l.88.069V37.85h-8.942l-2.634 2.212 2.634 2.257.863.023 3.566.068.067 10.763c.023 5.928-.045 10.785-.135 10.785-.429 0-3.971-2.326-5.235-3.42-1.196-1.05-3.16-3.603-3.16-4.128 0-.114 1.467-.205 3.273-.205l3.272-2.28-3.272-2.28h-3.724V36.397l-2.256-2.537-2.257 2.537v5.99Z'
      fill='url(#a)'
    />
    <Path
      d='M27.327 13.909c-4.739 0-8.558.114-8.626 0-.203-.32 1.653-3.078 2.804-4.127 1.783-1.596 4.987-3.626 5.687-3.626.18 0 .225.912.203 2.805l2.256 2.85 2.167-2.85.112-3.033V0h-.518c-1.084 0-4.107.935-6.116 1.893-5.483 2.622-9.59 6.612-11.034 10.67l-.497 1.391-1.444.525c-2.82 1.049-5.98 3.74-8.146 6.954C2.234 24.306.27 29.003.068 31.147L0 32.036h31.818V23l-2.19-2.662L27.396 23l-.023.872-.067 3.603-10.651.068c-5.868.023-10.674-.046-10.674-.137 0-.433 2.302-4.013 3.385-5.29 1.038-1.208 3.565-3.192 4.084-3.192.113 0 .203 1.482.203 3.306l2.257 3.306 2.256-3.306V18.47H33.256l2.51-2.28-2.51-2.28h-5.929Z'
      fill='url(#b)'
    />
    <Path
      d='M56.02 27.612c0-4.788-.113-8.647 0-8.715.315-.206 3.046 1.67 4.084 2.833 1.58 1.801 3.588 5.039 3.588 5.746 0 .182-.903.228-2.776.205l-2.82 2.28 2.82 2.189 3.002.114h5.867v-.525c0-1.094-.926-4.15-1.873-6.179-2.595-5.54-6.545-9.69-10.561-11.15l-1.377-.501-.519-1.46c-1.038-2.85-3.7-6.042-6.882-8.23C45.73 2.256 41.08.273 38.96.068L38.08 0v32.15H47.02l2.635-2.212-2.635-2.257-.863-.023-3.565-.068-.068-10.763c-.022-5.928.045-10.785.136-10.785.428 0 3.971 2.326 5.235 3.42 1.196 1.05 3.159 3.603 3.159 4.128 0 .114-1.467.205-3.272.205l-3.272 2.28 3.272 2.28h3.723V33.603l2.257 2.537 2.257-2.537v-5.99Z'
      fill='url(#c)'
    />
    <Path
      d='M42.551 55.807c4.739.033 8.559-.055 8.626.06.2.32-1.674 3.066-2.832 4.107-1.793 1.584-5.011 3.591-5.71 3.586-.181-.001-.22-.913-.185-2.806l-2.237-2.865-2.186 2.835-.133 3.032-.04 5.928.519.003c1.083.008 4.113-.906 6.128-1.85 5.501-2.584 9.635-6.546 11.106-10.595l.506-1.387 1.448-.515c2.828-1.029 6.005-3.698 8.193-6.898 1.96-2.86 3.955-7.543 4.172-9.684l.074-.89-15.908-.109-15.909-.11-.04 5.815-.021 3.22 2.17 2.677 2.253-2.646.028-.872.092-3.602 10.651.005c5.868.017 10.674.119 10.673.21-.003.433-2.329 3.997-3.42 5.266-1.047 1.202-3.587 3.168-4.106 3.164-.113 0-.194-1.483-.181-3.307l-2.234-3.322-2.28 3.29v.229l-.025 3.534-8.8-.06-6.29-.044-2.526 2.263 2.495 2.297 5.93.041Z'
      fill='url(#d)'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={15.909}
        y1={62.162}
        x2={15.909}
        y2={30.098}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#00AD58' />
        <Stop offset={1} stopColor='#FA3A21' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={0}
        y1={16.018}
        x2={44.849}
        y2={16.074}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.248} stopColor='#FA3920' />
        <Stop offset={1} stopColor='#00AD58' />
      </LinearGradient>
      <LinearGradient
        id='c'
        x1={53.932}
        y1={0}
        x2={53.99}
        y2={40.102}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.267} stopColor='#00AD58' />
        <Stop offset={1} stopColor='#FA3920' />
      </LinearGradient>
      <LinearGradient
        id='d'
        x1={62.282}
        y1={53.697}
        x2={20.817}
        y2={53.697}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#FA3920' />
        <Stop offset={1} stopColor='#00AD58' />
      </LinearGradient>
    </Defs>
  </Svg>
);