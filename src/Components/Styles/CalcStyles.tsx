// import * as React from 'react';
import styled from "../../styled-components/styled-components";

const Container = styled('div')<{isActive:boolean}>`
    background-color:gray;
    border:solid 1px black;
    border-radius: 10px;
    width:50vw;
    height:70vh;
    overflow:hidden;
    margin:30px auto;
    display:grid;
    position:relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr .5fr 5fr;
    grid-template-areas:"display display display display"
                        "sub-display sub-display sub-display sub-display"
                        "keyboard keyboard keyboard keyboard";

    #display{
        grid-area: display;
        position: relative;
    }
    #display h1{
        position:absolute;
        bottom:0;
        right:0;
        padding:5px;
        font-size:4rem;
    }
    #sub-display{
        grid-area: sub-display;
        border-top: solid .5px black;
        border-bottom: solid .5px black;
        position:relative;
    }
    #sub-display h3 {
        margin: 0;
        padding: 10px;
        position: absolute;
        right:0;
        color: ${props => props.theme.secondaryColor}
    }
    #keyboard{
        grid-area: keyboard;
    }

`
export default Container;



