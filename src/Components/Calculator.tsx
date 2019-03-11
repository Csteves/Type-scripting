import React from 'react';
import Display from './Display';
import SubDisplay from './SubDisplay';
import KeyBoard from "./KeyBoard";
import Container from './Styles/CalcStyles';
import styled from '../styled-components/styled-components';
import {add,minus,mult,divide,clear} from '../logic';
import { string } from 'prop-types';




interface Props {}
interface State {
  currentInput:string,
  isCounting:boolean,
  log: string[],
  result: number,
  display:string
}

class Calculator extends React.Component<Props,State> {

 state: State = {
    currentInput:"",
    isCounting:false,
    log: [],
    result: 0,
    display:'0'
  }


     handleOperator = (operator:string) => {
        if(operator === '=' || operator === 'AC' || operator === '+/-') return this.calculate(operator);
        let {log, currentInput} = this.state
        let copy:string[] = [...log,currentInput,operator];
        this.setState({log:copy})
        if(operator === 'C' && log.length %2 === 0){
          copy.splice(log.length-1);
          this.setState({log:copy,currentInput:''})
        }else if(operator === 'C' && log.length %2 !== 0){
          this.setState({result:0,currentInput:'',log:[],display:''})
        }else {
          this.calculate(operator)
        }
    }

    handleKey = (key:string) => {
      let {result, currentInput} = this.state
      let copy = currentInput === '' && key !== '0' ? "" : currentInput;
      copy += key;
      this.setState({
        currentInput:copy,
        display:copy
       })
    }

    calculate = (operator:string) => {
      let {currentInput,result,log} = this.state;
      let temp = result;
      // If only one input dont run any calculations, Unless operator is none calc operation
      if(log.length <=1 && operator !== "AC" && operator !== '=' && operator !== '+/-'){
        return this.setState({result:parseInt(currentInput), currentInput:'',display:result.toString()})
      }

      switch(operator){
        case 'AC':
        this.setState({currentInput:'', log:[], result:0, display:'0'});
        break;

        case '+':
        // if(currentInput === '')currentInput = "0";
        temp += parseInt(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toString()});
        break;

        case '-':
        // if(currentInput === '')currentInput = "0";
        temp -= parseInt(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toString()});
        break;

        case '/':
        // if(currentInput === '')currentInput = "1";
        temp /= parseInt(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toString()});
        break;

        case '*':
        // if(currentInput === '')currentInput = "1";
        temp *= parseInt(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toString()});
        break;

        case '+/-':
        let arr:string[] = currentInput.split('');
        let newStr:string = arr[0] === '-' ? arr.splice(1).join('') :['-',...arr].join('');
        this.setState({ currentInput:newStr, display:newStr});
        break;

        case '=':
        if(result && log.length){
          this.calculate(log[log.length-1])
          this.setState({currentInput:''})
        }
        break;
      }
    }

  render() {
    return (
      <Container isActive={this.state.isCounting} >
        <Display current={this.state.display}/>
        <SubDisplay log={this.state.log} />
        <KeyBoard
        input={this.handleKey}
        compute={this.handleOperator}/>
      </Container>
    );
  }
}

export default Calculator;
