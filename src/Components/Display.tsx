import * as React from 'react';
import Count from './Count'

const Display: React.FunctionComponent<{
  current: String;
}> = (props) => {
  return <div id="display">
            <Count length={props.current.length}> {props.current} </Count>
        </div>;
};

export default Display;