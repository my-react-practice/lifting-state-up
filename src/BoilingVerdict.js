import React from 'react';
export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水开了o(*￣︶￣*)o</p>;
  }
  return <p>水可能没开(ಥ﹏ಥ)</p>;
}
