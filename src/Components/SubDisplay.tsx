import * as React from 'react';

const SubDisplay: React.FunctionComponent<{
  log: string[];
}> = (props) => {
  return <div id="sub-display">
            <h3>{props.log.join(' ')}</h3>
        </div>;
};

export default SubDisplay;