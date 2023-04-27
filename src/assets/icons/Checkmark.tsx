import * as React from 'react';
import {Circle, Path, Svg, SvgProps} from 'react-native-svg';
import {COLORS} from '../../styles';

const Checkmark = (props?: SvgProps) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" {...props}>
    <Circle cx="14" cy="14" r="14" fill={COLORS.pink} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.8182 11.1847C19.5756 10.9384 19.1825 10.9384 18.9398 11.1847L12.7495 17.4761L9.04522 13.7114C8.80034 13.4795 8.41872 13.4863 8.18204 13.7269C7.94535 13.9674 7.93862 14.3553 8.16681 14.6042L12.3103 18.8153C12.5529 19.0616 12.946 19.0616 13.1887 18.8153L19.8182 12.0775C20.0606 11.8309 20.0606 11.4314 19.8182 11.1847Z"
      fill="#1B1F48"
      stroke="#1B1F48"
      strokeWidth="0.5"
    />
  </Svg>
);

export default Checkmark;
