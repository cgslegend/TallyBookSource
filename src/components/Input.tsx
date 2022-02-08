import React from "react";
import styled from "styled-components";

const Label = styled.label`
    display: flex;
    align-items: center;
    >span{ margin-right: 16px;font-size: 14px;white-space: nowrap}
    >input{
      color: #666;
      border: none;
      background: none;
      width: 100%;height: 72px;
      display: block
    }
  
`

type Props = {
    label:string;
}&React.InputHTMLAttributes<HTMLInputElement>;
const Input:React.FC <Props>= (props)=> {
const {label,children,...rest} = props;
    return  (
        <Label>
            <span>备注</span>
            <input {...rest}/>
        </Label>
    )
}

export {Input}