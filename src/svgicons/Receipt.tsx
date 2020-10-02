import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';

const Receipt = ({fill, ...rest}: {fill?: string} & SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest}>
      <G clip-path="url(#clip0)">
        <Path
          d="M2 4.57812V19.4219C2 19.7453 2.2625 20.0078 2.58594 20.0078H21.4141C21.7375 20.0078 22 19.7453 22 19.4219V4.57812C22 4.25469 21.7375 3.99219 21.4141 3.99219H2.58594C2.2625 3.99219 2 4.25469 2 4.57812ZM12.7812 17.2734H5.32031C4.99688 17.2734 4.73438 17.0109 4.73438 16.6875C4.73438 16.3641 4.99688 16.1016 5.32031 16.1016H12.7812C13.1047 16.1016 13.3672 16.3641 13.3672 16.6875C13.3672 17.0109 13.1047 17.2734 12.7812 17.2734ZM12.7812 14.9297H5.32031C4.99688 14.9297 4.73438 14.6672 4.73438 14.3438C4.73438 14.0203 4.99688 13.7578 5.32031 13.7578H12.7812C13.1047 13.7578 13.3672 14.0203 13.3672 14.3438C13.3672 14.6672 13.1047 14.9297 12.7812 14.9297ZM12.7812 12.5859H5.32031C4.99688 12.5859 4.73438 12.3234 4.73438 12C4.73438 11.6766 4.99688 11.4141 5.32031 11.4141H12.7812C13.1047 11.4141 13.3672 11.6766 13.3672 12C13.3672 12.3234 13.1047 12.5859 12.7812 12.5859ZM12.7812 10.2422H5.32031C4.99688 10.2422 4.73438 9.97969 4.73438 9.65625C4.73438 9.33281 4.99688 9.07031 5.32031 9.07031H12.7812C13.1047 9.07031 13.3672 9.33281 13.3672 9.65625C13.3672 9.97969 13.1047 10.2422 12.7812 10.2422ZM18.6797 14.9297H15.1641C14.8406 14.9297 14.5781 14.6672 14.5781 14.3438V9.65625C14.5781 9.33281 14.8406 9.07031 15.1641 9.07031H18.6797C19.0031 9.07031 19.2656 9.33281 19.2656 9.65625V14.3438C19.2656 14.6672 19.0031 14.9297 18.6797 14.9297ZM20.2422 6.33594H3.75781C3.43438 6.33594 3.17188 6.07344 3.17188 5.75C3.17188 5.42656 3.43438 5.16406 3.75781 5.16406H20.2422C20.5656 5.16406 20.8281 5.42656 20.8281 5.75C20.8281 6.07344 20.5656 6.33594 20.2422 6.33594Z"
          fill={fill || '#B0B0B0'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="20"
            height="16.0156"
            fill="white"
            transform="translate(2 3.99219)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Receipt;
