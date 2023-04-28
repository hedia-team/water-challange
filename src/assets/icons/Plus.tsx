import * as React from 'react';
import {LinearGradient, Rect, Stop, Svg, SvgProps} from 'react-native-svg';

const Plus = (props?: SvgProps) => (
  <Svg width="123" height="123" viewBox="0 0 123 123" fill="red" {...props}>
    <Rect
      x="20.0508"
      y="20.0508"
      width="82.8983"
      height="82.8983"
      rx="41.4492"
      fill="url(#paint0_linear_7_2774)"
    />
    <Rect x="59.9999" y="49" width="4" height="26" rx="2" fill="white" />
    <Rect
      x="48.9999"
      y="64"
      width="4"
      height="26"
      rx="2"
      transform="rotate(-90 48.9999 64)"
      fill="white"
    />
    <LinearGradient
      id="paint0_linear_7_2774"
      x1="-32.2246"
      y1="65.5212"
      x2="61.1907"
      y2="158.936"
      gradientUnits="userSpaceOnUse">
      <Stop stopColor="#01FFFC" />
      <Stop offset="0.359595" stopColor="#3D9AFF" />
      <Stop offset="0.645833" stopColor="#896ED8" />
      <Stop offset="0.880208" stopColor="#FD87FF" />
    </LinearGradient>
  </Svg>
);

export default Plus;
