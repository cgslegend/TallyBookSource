import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
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
  }
`;
type Props = { value:string;onChange:(value:string)=>void };
const NoteSection :React.FC<Props> = (props) => {
    const note = props.value;

    const refInput = useRef<HTMLInputElement>(null);
    const onBlur = ()=>{
        if (refInput.current !== null) {
            props.onChange(refInput.current.value);
        }
    }
    return(
        <Wrapper>
            <label>
            <span>备注</span>
            <input type="text" placeholder="点击此处添加备注"
                    ref={refInput}
                    defaultValue = {note}
                    onBlur = {onBlur}/>
            </label>
        </Wrapper>

    )
}
export {NoteSection};