import Layout from "../components/Layout";
import React from "react";
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
const NotesSection = styled.section`
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
const CategorySection = styled.section`
  font-size: 24px;
>ul{
  display: flex;
  background: #c4c4c4;
  >li{
    width: 50%;
    text-align: center;
    padding: 16px 0;
    position: relative;
    &.selected::after{
      content: '';
      display: block;
      height: 3px;
      background: #333;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }
}
`;
const NumberPadSection = styled.section`
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


function Money() {
    return (
        <Layout>
            <div className="MyLayout">
            <TagSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="点击此处添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="outputNum">100</div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="OK">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>

                </div>
            </NumberPadSection>
            </div>
        </Layout>
    );
}
export default Money;