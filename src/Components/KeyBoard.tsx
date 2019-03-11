import React from 'react';
import Key from './Key';
import OperatorBtn from './OperatorBtn';
import KeyBoardWrap from './Styles/KeyBoardWrap';




interface Props {
    id?: string,
    compute: (operator:string)=>void,
    input: (key:string) => void,
};
interface State {
    hasInput:boolean,
}

class KeyBoard extends React.Component<Props,State> {
    state = {
        hasInput:false
    }

      operatorPress = (e:React.MouseEvent<HTMLButtonElement> ) => {
          const {innerHTML} = e.currentTarget;
          console.log(innerHTML)
          if(innerHTML === 'C' || innerHTML === '=') this.setState({hasInput:false});
          this.props.compute(innerHTML)
    }

    private keyPress = (e:React.MouseEvent<HTMLButtonElement>) => {
        this.setState({hasInput:true})
        this.props.input(e.currentTarget.innerHTML)
    }
    render(){
        return(
            <KeyBoardWrap id="keyboard" >
            <OperatorBtn
            method={this.operatorPress}
            className="func-key" >
            {this.state.hasInput ? 'C' : "AC"}
            </OperatorBtn>
            <OperatorBtn
            method={this.operatorPress}
            className="func-key" >
            +/-
            </OperatorBtn>
            <OperatorBtn
            method={this.operatorPress}
            className="func-key" >
            %
            </OperatorBtn>
            <OperatorBtn
            method={this.operatorPress}
            className='operator-key' >
            /
            </OperatorBtn>
            <OperatorBtn
            method={this.operatorPress}
            className='operator-key' >
            *
            </OperatorBtn>
            <OperatorBtn
            method={this.operatorPress}
            className='operator-key' >
            -
            </OperatorBtn>
            <OperatorBtn
            method={this.operatorPress}
            className='operator-key' >
            +
            </OperatorBtn>
            <OperatorBtn
            method={this.operatorPress}
            className='operator-key' >
            =
            </OperatorBtn>
            <Key
            method={this.keyPress}
            className="num-key">
            7
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            8
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            9
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            4
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            5
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            6
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            1
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            2
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            3
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            0
            </Key>
            <Key
            method={this.keyPress}
            className="num-key">
            .
            </Key>
            </KeyBoardWrap>
        )
    }
}

export default KeyBoard