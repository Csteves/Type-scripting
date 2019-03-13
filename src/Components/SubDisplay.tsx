import * as React from 'react';

const SubDisplay: React.FunctionComponent<{
  log: string[];
  current?:string;
}> = (props) => {
  return <div id="sub-display">
            <h3>{props.log.join(' ') +" " + props.current }</h3>
        </div>;
};

export default SubDisplay;