// import * as React from 'react';
import styled from "../../styled-components/styled-components";

// interface Props{
//     isActive:boolean,

// }

const Container = styled('div')<{isActive:boolean}>`
    border: solid 1px black;
    background-color:${props => props.isActive ? props.theme.primaryColor : props.theme.primaryColorInverted };
    width:50vw;
    margin:30px auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
`
export default Container;



