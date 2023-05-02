import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const Close = (props?: SvgProps) => (
  <Svg
    width={props?.width ?? 24}
    height={props?.height ?? 24}
    viewBox="0 0 28 28"
    {...props}>
    <Path
      d="M4.4753 23.4372C5.10827 24.0746 6.20854 24.0519 6.82281 23.4477L14.0546 16.2888L21.2957 23.4425C21.9208 24.0599 22.9955 24.072 23.6285 23.4346C24.2858 22.7973 24.2736 21.7355 23.6364 21.1181L16.4101 13.9618L23.6364 6.8228C24.2736 6.20277 24.2858 5.129 23.6285 4.50632C22.9955 3.86898 21.9208 3.88101 21.2957 4.49576L14.0546 11.6468L6.82281 4.49312C6.20854 3.88628 5.10827 3.86634 4.4753 4.50104C3.83282 5.12636 3.85301 6.21333 4.46728 6.82016L11.7139 13.9618L4.46728 21.1207C3.85301 21.7275 3.83282 22.7999 4.4753 23.4372Z"
      fill={'#BEBEBE'}
    />
  </Svg>
);

export default Close;
