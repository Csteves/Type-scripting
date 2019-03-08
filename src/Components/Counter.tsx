import React from 'react';
import Count from './Count';
import CountBtn from './CountBtn';
import Container from './Styles/CounterStyles';
import styled from '../styled-components/styled-components';





interface Props {}
interface State {
  count:number,
  isCounting:boolean,

}

class Counter extends React.Component<Props,State> {

 state: State = {
    count:0,
    isCounting:false
  }

  increment = ()=>{
    this.setState({count: this.state.count +=1, isCounting:true})
  }
  decrement = () => {
    this.setState({count: this.state.count -=1, isCounting:true})
  }
  clear = () => {
    this.setState({count:0,isCounting:false})
  }
  render() {
    return (
      <Container isActive={this.state.isCounting} >

        <Count count={this.state.count}/>
        <CountBtn method={this.increment}>Increment</CountBtn>
        <CountBtn method={this.decrement}>Decrement</CountBtn>
        <CountBtn method={this.clear}>Clear</CountBtn>
      </Container>
    );
  }
}

export default Counter;
