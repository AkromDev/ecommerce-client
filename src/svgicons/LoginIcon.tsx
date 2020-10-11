import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const LoginIcon = ({fill, ...rest}: {fill?: string} & SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m298.667969 106.667969c0 58.910156-47.757813 106.664062-106.667969 106.664062s-106.667969-47.753906-106.667969-106.664062c0-58.910157 47.757813-106.667969 106.667969-106.667969s106.667969 47.757812 106.667969 106.667969zm0 0"
        fill={fill || '#B0B0B0'}
      />
    </Svg>
  );
};
export default LoginIcon;
