import styled from "styled-components";

const TagSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
>ol{
  margin: 0 -12px;
  >li{
    background: #d9d9d9;
    border-radius: 18px;
    display: inline-block;
    padding: 4px 18px;
    font-size: 14px;
    margin: 8px 12px;
  }
}
  >button{
    background: none;
    border: none;
    border-bottom: 1px solid #333;
   color: #666;
    margin-top: 8px;
    padding: 2px 4px ;
  }
`;
export {TagSection};