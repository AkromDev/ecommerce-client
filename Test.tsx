import React from 'react';
type Props = {
  message: string;
};
function Test(props: Props) {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
}

export default Test;
