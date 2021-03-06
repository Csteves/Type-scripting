import React from 'react';
import Display from './Display';
import SubDisplay from './SubDisplay';
import KeyBoard from "./KeyBoard";
import Container from './Styles/CalcStyles';
import styled from '../styled-components/styled-components';



interface Props {}
interface State {
  currentInput:string,
  isCounting:boolean,
  clickedEquals:boolean,
  log: string[],
  result: number,
  display:string,
  fixed: number
}

class Calculator extends React.Component<Props,State> {

 state: State = {
    currentInput:"",
    isCounting:false,
    clickedEquals:false,
    log: [],
    fixed:0,
    result: 0,
    display:'0'
  }

     componentDidUpdate(prevProps:Props,prevState:State){
            if(parseFloat(prevState.display) !== this.state.result && this.state.clickedEquals){
                this.setState({
                  display:this.state.result.toString(),
                  currentInput:this.state.display,
                  log:[this.state.currentInput]
                })
            }
     }

     handleOperator = (operator:string) => {
        if(operator === '=' || operator === 'AC' || operator === '+/-') return this.calculate(operator);
        let {log , currentInput} = this.state
        let copy:string[] = [...log,currentInput,operator];
        this.setState({log:copy,clickedEquals:false})
        //If operator is clear, remove the last input
        if(operator === 'C' && copy.length %2 === 0){
          copy.splice(copy.length-1);
          this.setState({log:copy,currentInput:''})
        }else if(operator === 'C' && copy.length %2 !== 0){
          this.setState({result:0,currentInput:'',log:[],display:''})
        }else {
          this.calculate(operator)
        }
    }

    handleKey = (key:string) => {
      let {result, currentInput} = this.state
      let copy:string = currentInput === '' && key !== '0' ? "" : currentInput;
      copy += key;
      this.setState({
        currentInput:copy,
        display:copy,
        clickedEquals:false
       })
    }

    calculate = (operator:string) => {
      let {currentInput,result,log,clickedEquals} = this.state;
      let fixed:number = 0;
      let temp:number = result;
      // If only one input dont run any calculations, Unless operator is none calc operation
      if(log.length <=1 && operator !== "AC" && operator !== '=' && operator !== '+/-'){
        return this.setState({result:parseFloat(currentInput), currentInput:'',display:result.toFixed(fixed)})
      }

      switch(operator){
        case 'AC':
        this.setState({currentInput:'', log:[], result:0, display:'0',clickedEquals:false});
        break;

        case '+':
        // if(currentInput === '')currentInput = "0";
        temp += parseFloat(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toFixed(fixed)});
        break;

        case '-':
        // if(currentInput === '')currentInput = "0";
        temp -= parseFloat(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toFixed(fixed)});
        break;

        case '/':
        // if(currentInput === '')currentInput = "1";
        temp /= parseFloat(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toFixed(fixed)});
        break;

        case '*':
        // if(currentInput === '')currentInput = "1";
        temp *= parseFloat(currentInput);
        this.setState({result:temp, currentInput:'', display:temp.toFixed(fixed)});
        break;

        case '+/-':
        let arr:string[] = currentInput.split('');
        let newStr:string = arr[0] === '-' ? arr.splice(1).join('') :['-',...arr].join('');
        this.setState({ currentInput:newStr, display:newStr});
        break;

        case '=':
        if(!clickedEquals && result && log.length){
          this.calculate(log[log.length-1])
          this.setState({clickedEquals:true})
        }
        break;
      }
    }

  render() {
    return (
      <Container isActive={this.state.isCounting} >
        <Display current={this.state.display}/>
        <SubDisplay log={this.state.log} current={this.state.currentInput} />
        <KeyBoard
        input={this.handleKey}
        compute={this.handleOperator}/>
      </Container>
    );
  }
}

export default Calculator;
