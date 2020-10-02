import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const CartIcon = ({fill, ...rest}: {fill?: string} & SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 9.50624H17.21L12.82 2.93624C12.42 2.34624 11.55 2.34624 11.16 2.93624L6.77 9.50624H2C1.45 9.50624 1 9.95624 1 10.5062C1 10.5962 1.01 10.6862 1.04 10.7762L3.58 20.0462C3.81 20.8862 4.58 21.5062 5.5 21.5062H18.5C19.42 21.5062 20.19 20.8862 20.43 20.0462L22.97 10.7762L23 10.5062C23 9.95624 22.55 9.50624 22 9.50624ZM11.99 5.29624L14.8 9.50624H9.18L11.99 5.29624ZM10 15.5062C10 16.6062 10.9 17.5062 12 17.5062C13.1 17.5062 14 16.6062 14 15.5062C14 14.4062 13.1 13.5062 12 13.5062C10.9 13.5062 10 14.4062 10 15.5062Z"
        fill={fill || '#B0B0B0'}
      />
    </Svg>
  );
};

export default CartIcon;
