import * as React from 'react';
import {
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
  SvgProps,
} from 'react-native-svg';
import {COLORS} from '../../styles';

const Crown = (props?: SvgProps) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill={COLORS.dark} {...props}>
    <Rect
      x="1"
      y="1"
      width="26"
      height="25.625"
      rx="12.8125"
      stroke="url(#paint1_linear_22_1374)"
      strokeWidth="2"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3518 9.27933C13.6981 8.90686 14.302 8.90689 14.6483 9.27941C15.1728 9.84411 16.4047 11.1687 17.0106 11.8195C17.5905 11.3705 18.6807 10.526 19.5757 9.83241C20.1953 9.35172 21.1278 9.85364 20.9854 10.6234C20.8009 11.6279 20.3516 14.7907 20.085 16.6986C19.9304 17.8062 18.9431 18.625 17.7789 18.625H10.2234C9.05922 18.625 8.07211 17.8064 7.91658 16.6998C7.64994 14.7917 7.19977 11.6286 7.01457 10.6241C6.87221 9.85398 7.80479 9.35292 8.42404 9.83222C9.3189 10.5264 10.4087 11.3705 10.9889 11.8193C11.5949 11.1684 12.8265 9.84422 13.3518 9.27933ZM12.7113 15.2567C12.7113 14.9723 12.9523 14.7418 13.2497 14.7418H14.7614C15.0588 14.7418 15.2998 14.9723 15.2998 15.2567C15.2998 15.541 15.0588 15.7715 14.7614 15.7715H13.2497C12.9523 15.7715 12.7113 15.541 12.7113 15.2567Z"
      fill="url(#paint0_linear_22_1374)"
    />
    <LinearGradient
      id="paint0_linear_22_1374"
      x1="7"
      y1="9"
      x2="22.1411"
      y2="12.4051"
      gradientUnits="userSpaceOnUse">
      <Stop stopColor="#F988FF" />
      <Stop offset="1" stopColor="#3D9AFF" />
    </LinearGradient>
    <LinearGradient
      id="paint1_linear_22_1374"
      x1="0"
      y1="0"
      x2="27.6225"
      y2="27.9975"
      gradientUnits="userSpaceOnUse">
      <Stop stopColor="#FD87FF" />
      <Stop offset="1" stopColor="#3D9AFF" />
    </LinearGradient>
  </Svg>
);

export default Crown;
