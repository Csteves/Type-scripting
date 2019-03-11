import styled from 'styled-components';

const KeyBoardStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: " c pos-neg percent div "
                         "seven eight nine mult"
                         "four five six minus"
                         "one two three plus"
                         "zero decimal equals equals";
    & div:nth-child(1){
        grid-area:c;
    }
    &  div:nth-child(2){
        grid-area:pos-neg;
    }
    & div:nth-child(3){
        grid-area:percent;
    }
    & div:nth-child(4){
        grid-area:div;
    }
    & div:nth-child(5){
        grid-area:mult;
    }
    & div:nth-child(6){
        grid-area:minus;
    }
    & div:nth-child(7){
        grid-area:plus;
    }
    & div:nth-child(8){
        grid-area:equals;
    }
    & div:nth-child(9){
        grid-area:seven;
    }
    & div:nth-child(10){
        grid-area:eight;
    }
    & div:nth-child(11){
        grid-area:nine;
    }
    & div:nth-child(12){
        grid-area:four;
    }
    & div:nth-child(13){
        grid-area:five;
    }
    & div:nth-child(14){
        grid-area:six;
    }
    & div:nth-child(15){
        grid-area:one;
    }
    & div:nth-child(16){
        grid-area:two;
    }
    & div:nth-child(17){
        grid-area:three;
    }
    & div:nth-child(18){
        grid-area:zero;
    }
    & div:nth-child(19){
        grid-area:decimal;
    }
    & div{
        border: solid .5px black;
    }
    .func-key{
        background-color:slategrey;
    }
    .operator-key{
        background-color:darkorange;
    }
    .num-key{
        background-color: gainsboro;
    }
`
export default KeyBoardStyles