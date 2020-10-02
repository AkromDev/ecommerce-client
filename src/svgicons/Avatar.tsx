import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const Avatar = ({fill, ...rest}: {fill?: string} & SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V18Z"
        fill={fill || '#B0B0B0'}
      />
    </Svg>
  );
};
export default Avatar;
