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

const NoteSection :React.FC = () => {
    const [note,setNote] = useState('');
    const refInput = useRef<HTMLInputElement>(null);
    const onBlur = ()=>{
        if (refInput.current !== null) {
            setNote(refInput.current.value);
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