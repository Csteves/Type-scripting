import * as React from 'react';
import styled from '../styled-components/styled-components';


const DisplayCount = styled('h1')<{length:number}>`
        position:absolute;
        bottom:0;
        right:0;
        padding:5px;
        font-size:${props => props.length > 11 ? `calc((100vw - 40vw) / ${props.length >= 30 ? 30 : props.length})`:"calc((100vw - 50vw) / 10)"};
`
interface Props{
  length:number;
  children:object;
}

const Count: React.FunctionComponent <Props> = (props:Props) => {
  console.log(props.length)
  return <DisplayCount length={props.length} >{props.children}</DisplayCount>;
};

export default Count;