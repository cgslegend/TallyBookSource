import styled from "styled-components";
import React, {useEffect, useState} from "react";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
>.outputNum{
  background: #ffffff;
  line-height: 72px;
  font-size: 36px;
  text-align: right;
  padding: 0 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);
}
  >.pad{
    display: block;
    >button{
      border: none;
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      &.OK{
        height:128px ;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1){
        background: #F2F2F2;
      }
      &:nth-child(2),&:nth-child(5){
        background: #E0E0E0;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: #D3D3D3;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(12){
        background: #7b7b7b;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: #A9A9A9;
      }
      &:nth-child(14){
        background: #8B8B8B;
      }
    }
  }
`;
type Props = {
    value: number;
    onChange: (value: number) => void;
    onOK?: () => void;
}
const NumberPadSection: React.FC<Props> = (props) => {

    const [output, setOutput] = useState('0')
    const padTouch = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return
        }
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (output.length >= 16) {
                    return;
                } else {
                    if (output === '0') {
                        setOutput(text);
                    } else {
                        setOutput(output + text);
                    }
                    break;
                }
            case '??????' :
                if (output.length === 1) {
                    setOutput('0')
                } else {
                    setOutput(output.slice(0, output.length - 1));
                }
                break;
            case '??????' :
                setOutput('0')
                break;
            case 'OK' :
                //props.onChange(parseFloat(output))
                if (props.onOK) {
                    props.onOK();
                    setOutput('0')
                }
                break;
            case '.':
                if (output.indexOf('.') > 0) {
                    break;
                } else {
                    setOutput(output + '.');
                }
                break;
        }
    }
    useEffect(() => {
        props.onChange(parseFloat(output))
    }, [output])
    return (
        <Wrapper>
            <div className="outputNum">{output}</div>
            <div className="pad clearfix" onClick={padTouch}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>??????</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>??????</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="OK">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>)
}
export {NumberPadSection}