import * as React from 'react';

interface Props {
    method: Function,
    children:string,
  }

  const CountBtn: React.FunctionComponent<Props> = (props) => {
    return <button
            type='submit'
            onClick={() => props.method()}
            >
            {props.children}
            </button>;
  };
  export default CountBtn;